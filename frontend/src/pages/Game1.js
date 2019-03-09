import React, { Component } from 'react';
import data from '../assets/data/Game-1-Data';
import Letter from '../components/Letter';
import styles from '../assets/css/Game.module.css';
import utils from '../utils/utils';
import Score from '../components/Score';
import GameFeedback from "../components/Game1Feedback";

//variables for controlling color change, just bootstrap classes for now, they could also be implemented as dynamic css classes;
const colorError = 'bg-danger' || styles.letterDanger; //not implemented yet
const colorSuccess = "bg-success" || styles.letterSuccess; //not implemented yet
class Game extends Component {
    state = {
        errors: 0,
        progress: 0,
        isGameFinished: false,
        words: data.words.slice(),
        GameHistory: [],
    }
    
    resetWordColors(){
        [].slice.call(document.querySelectorAll('#letter')).forEach(c => {
            c.classList.remove(colorError);
            c.classList.remove(colorSuccess);
        })
    }
    toggleThisWordsAccent(e) {
        e.target.textContent = utils.toggleAccent(e.target.textContent);
    }
    
    
    handleError = (e, i) => {
        e.target.classList.add(colorError);
        let letter = e.target.textContent;
        this.setState({
                errors: this.state.errors + 1,
                GameHistory: [...this.state.GameHistory, letter],
        })
    }

    handleSuccess = (e,i) => {
        const {progress, GameHistory} = this.state
        e.persist();
        e.target.classList.add(colorSuccess);
        this.toggleThisWordsAccent(e);
        //the simbol % is used in the Game feedback component to
        //separate the history for each word
        let actualHistory = this.state.GameHistory;
        console.log(actualHistory)
        let letter = e.target.textContent;
        setTimeout(() => {
            this.setState({
                progress: progress + 1,
                GameHistory: [...this.state.GameHistory, letter, " "],
            })
            if(this.state.progress === this.state.words.length) {
                this.setState({
                    isGameFinished: true,
                })
            }
            this.resetWordColors();
            this.toggleThisWordsAccent(e);
        }, 400);
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
        //Variables
        const {words, progress, isGameFinished, errors} = this.state;
        const actualWord = words[progress];
        const letters = this.renderLetters(actualWord);

        //conditional variables
        const gameTitle = isGameFinished ? 
        "Congratulations! You completed the level!" : 
        "Click the words that should be accented";

        const scoreBoard = !isGameFinished ?
                            <Score 
                            score={progress} 
                            mistakes={errors} 
                            wordsRemaining={words.length - progress}
                            >
                            </Score> 
                            :
                            null;
        return (
            <div className={`${styles.accentGame} jumbotron jumbotron-fluid text-center`}>
                <div className={`${styles.accentGameWord} container py-5`}>
                    <h1>Game 1: <span className="h2">{gameTitle}</span></h1>
                    <div className="container d-flex justify-content-center align-items-center">
                        {letters}
                        {isGameFinished ? <GameFeedback history={this.state.GameHistory}/> : null}
                    </div>
                   {scoreBoard}
                </div>
            </div>
        )
    }
}

export default Game;