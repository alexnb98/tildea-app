import React, { Component } from 'react';
import data from '../assets/data/GameData';
import Letter from '../components/Letter';
import styles from '../assets/css/Game.module.css';
import utils from '../utils/utils';
import Score from '../components/Score';


class Game extends Component {
    state = {
        errors: 0,
        words: data.words.slice(),
        progress: 0,
        history: [],
    }

    handleError = (e) => {
        const colorError = 'bg-danger';
        e.target.classList.add(colorError);
    }
    
    handleSuccess = (e) => {
        const colorSuccess = "bg-success";
        const successes = this.state.progress + 1;
        e.target.classList.add(colorSuccess);
        this.setState({
            progress: successes,
        })
    }

    render() {
        const {words} = this.state;
        let {progress} = this.state;
        const actualWord = words[progress];

        const letters = [...actualWord].map((c, i) => {
            if (i === utils.getAccentIndex(actualWord)) {
                return (
                    <Letter key={i} onClick={this.handleSuccess}>{c}</Letter>
                )
            }

            return (
                <Letter key={i} onClick={this.handleError}>{c}</Letter>
            )
        })

        return (
            <div className={`${styles.accentGame} jumbotron jumbotron-fluid text-center`}>
                <div className={`${styles.accentGameWord} container py-5`}>
                    <h1>Game 1</h1>
                    <div className="container d-flex justify-content-center align-items-center">
                        {letters}
                    </div>
                    <Score score={this.state.progress} mistakes={this.state.errors} wordsRemaining={this.state.words.length - this.state.progress}></Score>
                    <div className="container d-flex justify-content-around">
                        <button className="button button-success h-25 w-25">
                            Next
                        </button>
                        <button className="button button-success h-25 w-25">
                            Last
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Game;