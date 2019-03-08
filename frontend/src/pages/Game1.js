import React, { Component } from 'react';
import data from '../assets/data/Game-1-Data';
import Letter from '../components/Letter';
import styles from '../assets/css/Game.module.css';
import utils from '../utils/utils';
import Score from '../components/Score';
import GameFeedback from '../components/Game1Feedback';
import FeedbackWord from '../components/FeedbackWords';


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

        this.setState((state, props) => {
            return {
                errors: state.errors + 1,
                errorHistory: state.errorHistory.concat(i),
            }
        })
    }
    
    handleSuccess = (e,i) => {
        e.persist();
        const colorSuccess = "bg-success";
        e.target.classList.add(colorSuccess);
        e.target.textContent = utils.toggleAccent(e.target.textContent);

        setTimeout(() => {
            this.setState((state,props) => {
                console.log(props);
                return {
                    progress: state.progress + 1,
                    lettersHistory: state.lettersHistory.concat({
                        correctLetter: i,
                        errors: state.errorHistory,
                    })
                }
            })
            this.resetWords();
            e.target.textContent = utils.toggleAccent(e.target.textContent);
            
            if(this.state.progress === this.state.words.length) {
                this.setState({
                    end: true,
                })
            }
            
            console.log(this.state);

        }, 400);
    }

    // renderWordList() {
    //     return this.state.lettersHistory.map((ulElement,i) => {
    //         return (
    //             <ul className="list-group d-flex flex-row" key={i}>
    //                 {
    //                     ulElement.map((listElement, j) => {
    //                         const classes = listElement.className.split(" ").filter(letter => {
    //                             return letter === "bg-success" || letter === "bg-danger"
    //                         })

    //                         return (
    //                             <FeedbackWord className={classes.join(" ")} key={String.fromCharCode(j)}>
    //                                 {listElement.textContent}
    //                             </FeedbackWord>
    //                         )
    //                     })
    //                 }
    //             </ul>
    //         );
    //     })
    // }

    renderLetters(word) {
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
        const actualWord = words[progress] || "";

        const letters = this.renderLetters(actualWord);

        const feedback = this.state.end ? "Congratulations! You completed the level!" : "Click the words that should be accented";

        // const wordList = this.renderWordList(); 
                
        return (
            <div className={`${styles.accentGame} jumbotron jumbotron-fluid text-center`}>
                <div className={`${styles.accentGameWord} container py-5`}>
                    <h1>Game 1: <span className="h2">{feedback}</span></h1>
                    <div className="container d-flex justify-content-center align-items-center">
                        {letters}
                        <GameFeedback 
                        end={this.state.end} 
                        score={this.state.progress || 0} 
                        mistakes={this.state.errors || 0}
                        >
                        {/* {wordList} */}
                        </GameFeedback>
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