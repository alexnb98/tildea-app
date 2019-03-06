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

    resetWord = (e) => {

    }

    handleError = (e) => {
        const colorError = 'bg-danger';
        e.target.classList.add(colorError);
        const newErrors = this.state.errors + 1;
        
        console.log(this.state.history);
        this.setState({
            errors: newErrors,
        })
    }
    
    handleSuccess = (e) => {
        e.persist();
        const colorSuccess = "bg-success";
        e.target.classList.add(colorSuccess);
        setTimeout(() => {
            const newProgress = this.state.progress + 1;
            this.setState({
                progress: newProgress,
            })
        }, 300 );
        console.log('loco')
    }

    render() {
        const {words} = this.state;
        let {progress} = this.state;
        const actualWord = words[progress] || "";

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
                
        if(actualWord) {
            return (
                <div className={`${styles.accentGame} jumbotron jumbotron-fluid text-center`}>
                <div className={`${styles.accentGameWord} container py-5`}>
                    <h1>Game 1: <span className="h2">Click the accent</span></h1>

                    <div className="container d-flex justify-content-center align-items-center">
                        {letters}
                    </div>
                    <Score score={this.state.progress} mistakes={this.state.errors} wordsRemaining={this.state.words.length - this.state.progress}></Score>
                    <div className="container d-flex justify-content-around">
                        {/* <button className="button button-success h-25 w-25">
                            Last
                            </button>
                            <button className="button button-success h-25 w-25">
                            Next
                        </button> */}
                    </div>
                </div>
            </div>
            )
        } else {
            
        }
    }
}

export default Game;