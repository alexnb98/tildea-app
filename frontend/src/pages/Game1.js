import React, { Component } from 'react';
import data from '../assets/data/Game-1-Data';
import Letter from '../components/Letter';
import utils from '../utils/utils';
import Score from '../components/Score';
import GameFeedback from "../components/Game1Feedback";

//variables for controlling color change, just bootstrap classes for now, they could also be implemented as dynamic css classes;
const colorError = 'bg-danger';
const colorSuccess = "bg-success";
class Game extends Component {
    state = {
        errors: 0,
        progress: 0,
        isGameFinished: false,
        words: data.words.slice(),
        gameHistory: [],
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
    
    handleMistake = (e, indexClickedLetter) => {
        e.target.classList.add(colorError);
        this.setState({
            errors: this.state.errors + 1,
            gameHistory: [...this.state.gameHistory, indexClickedLetter],
        })
    }

    handleSuccess = e => {
        const {progress, words} = this.state
        e.persist();
        e.target.classList.add(colorSuccess);
        this.toggleThisWordsAccent(e);
        setTimeout(() => {
            this.setState({
                progress: progress + 1,
                gameHistory: [...this.state.gameHistory, " "],
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
                    onClick={(e) => {this.handleSuccess(e)}}
                    >
                        {utils.removeAccent(c)}
                    </Letter>
                    )
            }
            return (
                <Letter key={i} onClick={(e) => {this.handleMistake(e,i)}}>{c}</Letter>
            )
        })
    }

    render() {
        //Variables
        const { words, progress, isGameFinished, errors, gameHistory} = this.state;
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
            <div className="bg-light text-center py-5">
                <div className="container py-5">
                    <h1>Game 1: <span className="h2">{gameTitle}</span></h1>
                    <div className="container h-100 py-5">
                        <div className="py-5">
                            {letters}
                        </div>
                        {isGameFinished ? (
                            <div>
                                <GameFeedback history={GameHistory}/>
                            </div>
                            ) : null}
                    </div>
                   {scoreBoard}
                </div>
            </div>
        )
    }
}

export default Game;