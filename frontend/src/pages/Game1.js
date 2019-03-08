import React, { Component } from 'react';
import data from '../assets/data/Game-1-Data';
import Letter from '../components/Letter';
import styles from '../assets/css/Game.module.css';
import utils from '../utils/utils';
import Score from '../components/Score';
import GameFeedback from '../components/Game1Feedback';
import FeedbackWord from '../components/FeedbackWord';
import FeedbackLetter from '../components/FeedbackLetter';
import FeedbackList from '../components/FeedbackList';


class Game extends Component {
    state = {
        errors: 0,
        words: data.words.slice(),
        progress: 0,
        lettersHistory: [],
        errorHistory: [],
        end: false
    }
    
    resetWords = () => {
        [].slice.call(document.querySelectorAll('#letter')).forEach(c => {
            c.classList.remove("bg-danger");
            c.classList.remove("bg-success");
        })
    }
    
    handleError = (e, i) => {
        const colorError = 'bg-danger';
        e.target.classList.add(colorError);
        const sortedErrors = this.state.errorHistory.concat(i);
        sortedErrors.sort((a,b) => b-a);
        this.setState(state => {
            return {
                errors: state.errors + 1,
                errorHistory: sortedErrors,
            }
        })
    }

    toggleThisWordsAccent(e) {
        e.target.textContent = utils.toggleAccent(e.target.textContent);
    }
    
    handleSuccess = (e,i) => {
        e.persist();
        const colorSuccess = "bg-success";
        e.target.classList.add(colorSuccess);
        this.toggleThisWordsAccent(e);
        const sortedErrors = this.state.errorHistory;
        sortedErrors.sort((a,b) => b-a);
        setTimeout(() => {
            this.setState(state => {
                return {
                    progress: state.progress + 1,
                    lettersHistory: state.lettersHistory.concat({
                        correctLetter: i,
                        errors: sortedErrors,
                    }),
                    errorHistory: [],
                }
            })
            if(this.state.progress === this.state.words.length) {
                this.setState({
                    end: true,
                })
            }
            
            this.resetWords();
            this.toggleThisWordsAccent(e);
        }, 400);
    }

    renderFeedbackLetters(word, letterIndex) {
        const errorsArrayCopy = this.state.lettersHistory[letterIndex].errors;
        const wordArray = word.split("").map((c, i) => {
            if(i === this.state.lettersHistory[letterIndex].correctLetter) {
                return (
                    <FeedbackLetter key={c + i} className="bg-success">
                        {c}
                    </FeedbackLetter>
                )
            } else if(i === errorsArrayCopy[errorsArrayCopy.length -1] && errorsArrayCopy.length !== 0) {
                errorsArrayCopy.pop();
                return (
                    <FeedbackLetter key={c + i} className="bg-danger">
                        {c}
                    </FeedbackLetter>
                )
            }
            return(
                <FeedbackLetter key={c + i}>
                    {c}
                </FeedbackLetter>
            )
        });
        return wordArray;
    }

    renderWord(words = []) {
        return words.map((c,i)  => {
            return (
                <FeedbackWord key={c}>
                    {this.renderFeedbackLetters(c, i)}
                </FeedbackWord>
            )
        });
    }

    renderLetters(word = []) {
        return [...word].map((c, i) => {
            if (i === utils.getAccentIndex(word)) {
                return (
                    <Letter 
                    key={i} 
                    onClick={(e) => {this.handleSuccess(e,i)}}
                    >
                        {utils.removeAccent(c)}
                    </Letter>
                    )
            }
            return (
                <Letter key={i} onClick={(e) => {this.handleError(e,i)}}>{c}</Letter>
            )
        })
    }


    render() {
        const {words} = this.state;
        let {progress} = this.state;
        const actualWord = words[progress];

        const letters = this.renderLetters(actualWord);

        const gameTitle = this.state.end ? 
        "Congratulations! You completed the level!" : 
        "Click the words that should be accented";
        
        const feedback = this.state.end ?  
            <GameFeedback 
                    end={this.state.end} 
                    score={this.state.progress || 0} 
                    mistakes={this.state.errors || 0}
                    >
                    {this.renderWord(this.state.words)}
            </GameFeedback> :
        null;

        return (
            <div className={`${styles.accentGame} jumbotron jumbotron-fluid text-center`}>
                <div className={`${styles.accentGameWord} container py-5`}>
                    <h1>Game 1: <span className="h2">{gameTitle}</span></h1>
                    <div className="container d-flex justify-content-center align-items-center">

                        {letters}

                        {feedback}


                    </div>
                    <Score 
                    end={this.state.end} 
                    score={this.state.progress} 
                    mistakes={this.state.errors} 
                    wordsRemaining={this.state.words.length - this.state.progress}
                    >
                    </Score>
                </div>
            </div>
        )
    }
}

export default Game;