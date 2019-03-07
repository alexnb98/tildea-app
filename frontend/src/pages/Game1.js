import React, { Component } from 'react';
import data from '../assets/data/Game-1-Data';
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

    resetWords = () => {
        [].slice.call(document.querySelectorAll('#letter')).forEach(c => {
            c.classList.remove("bg-danger");
            c.classList.remove("bg-success");
        })
    }

    handleError = (e) => {
        const colorError = 'bg-danger';
        e.target.classList.add(colorError);
        const newErrors = this.state.errors + 1;
        const newHistory = {
            progress: this.state.progress,
            word: this.state.words[this.state.progress],
            errors: newErrors,
        }
        this.setState({
            errors: newErrors,
            history: newHistory,
        })
    }
    
    handleSuccess = (e) => {
        e.persist();
        const colorSuccess = "bg-success";
        const newProgress = this.state.progress + 1;
        const newHistory = {
            progress: newProgress,
            word: this.state.words[this.state.progress],
        }
        
        e.target.classList.add(colorSuccess);
        e.target.textContent = utils.toggleAccent(e.target.textContent);
        setTimeout(() => {
            this.resetWords();
            this.setState({
                history: newHistory,
                progress: newProgress,
            })
            e.target.textContent = utils.toggleAccent(e.target.textContent);
        }, 500);
    }

    render() {
        const {words} = this.state;
        let {progress} = this.state;
        const actualWord = words[progress] || "";

        const letters = [...actualWord].map((c, i) => {
            if (i === utils.getAccentIndex(actualWord)) {
                return (
                    <Letter 
                    key={i} 
                    onClick={this.handleSuccess}
                    >
                    {utils.removeAccent(c)}
                    </Letter>
                    )
            }
                
            return (
                <Letter key={i} onClick={this.handleError}>{c}</Letter>
            )
        })
                
        return (
            <div className={`${styles.accentGame} jumbotron jumbotron-fluid text-center`}>
            <div className={`${styles.accentGameWord} container py-5`}>
                <h1>Game 1: <span className="h2">Click the accent</span></h1>

                <div className="container d-flex justify-content-center align-items-center">
                    {letters}
                </div>
                <Score score={this.state.progress} mistakes={this.state.errors} wordsRemaining={this.state.words.length - this.state.progress}></Score>
                <div className="container d-flex justify-content-around">
                    
                </div>
            </div>
        </div>
        )
    }
}

export default Game;