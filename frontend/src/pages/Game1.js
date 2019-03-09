import React, { Component } from 'react';
import data from '../assets/data/Game-1-Data';
import Letter from '../components/Letter';
import styles from '../assets/css/Game.module.css';
import utils from '../utils/utils';
import Score from '../components/Score';
import GameFeedback from '../components/ScoreBoard';
import FeedbackWord from '../components/FeedbackWord';
import FeedbackLetter from '../components/FeedbackLetter';

//variables for controlling color change, just bootstrap classes for now, they could also be implemented as dynamic css classes;
const colorError = 'bg-danger' || styles.letterDanger; //not implemented yet
const colorSuccess = "bg-success" || styles.letterSuccess; //not implemented yet
const LetterClassName = "display-1 display-sm-5";
class Game extends Component {
    state = {
        errors: 0,
        progress: 0,
        lettersHistory: [],
        errorHistory: [],
        isGameFinished: false,
        words: data.words.slice(),
    }
    
    handleError = (e, i) => {
        e.target.classList.add(colorError);
        const sortedErrors = this.state.errorHistory.concat(i);
        sortedErrors.sort((a,b) => b-a);
        this.setState({
                errors: this.state.errors + 1,
                errorHistory: sortedErrors,
        })
    }

    toggleThisWordsAccent(e) {
        e.target.textContent = utils.toggleAccent(e.target.textContent);
    }
    
    handleSuccess = (e,i) => {
        e.persist();
        e.target.classList.add(colorSuccess);
        this.toggleThisWordsAccent(e);
        const sortedErrors = this.state.errorHistory;
        sortedErrors.sort((a,b) => b-a);
        const newLettersHistoryItem = this.state.lettersHistory.concat({
            correctLetter: i,
            errors: sortedErrors,
        });
        setTimeout(() => {
            this.setState({
                progress: this.state.progress + 1,
                lettersHistory: newLettersHistoryItem,
                errorHistory: [],
            })
            if(this.state.progress === this.state.words.length) {
                this.setState({
                    isGameFinished: true,
                })
            }
            utils.resetLetterColors("#letter", colorSuccess, colorError);
            this.toggleThisWordsAccent(e);
        }, 400);
    }

    renderFeedbackLetters(word = "", letterIndex = 0) {
        const errorsArrayCopy = this.state.lettersHistory[letterIndex].errors;
        const wordArray = word.split("").map((c, i) => {
            if(
                i === this.state.lettersHistory[letterIndex].correctLetter
            ) {
                return (
                    <FeedbackLetter key={c + i} className={colorSuccess}>
                        {c}
                    </FeedbackLetter>
                )
            } else if(
                i === errorsArrayCopy[errorsArrayCopy.length -1] &&
                errorsArrayCopy.length !== 0
            ) {
                errorsArrayCopy.pop();
                return (
                    <FeedbackLetter key={c + i} className={colorError}>
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
                    key={i} className={LetterClassName}
                    onClick={(e) => {this.handleSuccess(e,i)}}
                    >
                        {utils.removeAccent(c)}
                    </Letter>
                    )
            }
            return (
                <Letter 
                    key={i} 
                    onClick={(e) => {this.handleError(e,i)}}
                    className={LetterClassName}
                    >
                        {c}
                </Letter>
            )
        })
    }

    render() {
        //Variables
        const {words, progress, isGameFinished, errors} = this.state;
        const actualWord = words[progress];
        const letters = this.renderLetters(actualWord);
        const gameId = 1;

        //conditional variables
        const gameTitle = isGameFinished ? 
        "Congratulations! You completed the level!" : 
        "Click the letters that should be accented";

        return (
            <div className={`${styles.accentGame} jumbotron jumbotron-fluid text-center`}>
                <div className={`${styles.accentGameWord} container py-5`}>
                    <h1 className="text-center font-weight-light">{gameTitle}</h1>
                    <div className="container d-flex justify-content-center align-items-center">
                        {letters}
                        {isGameFinished ?  
                        <GameFeedback gameId={gameId} score={progress || 0} mistakes={errors || 0}>{this.renderWord(words)}</GameFeedback> :null}
                    </div>
                    {!isGameFinished ? <Score score={progress} mistakes={errors} wordsRemaining={words.length - progress}></Score> :
                    null}
                </div>
            </div>
        )
    }
}

export default Game;