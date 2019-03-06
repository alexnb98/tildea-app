import React, {Component} from 'react';
import data from '../assets/data/GameData';
import Letter from '../components/Letter';
import styles from '../assets/css/Game.module.css';
import utils from '../utils/utils';


class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: 0,
            correct: 0,
            words: data.words.slice(),
            progress: 0,
        }
    }

    handleClick(props = "", args = "") {
        const colorOnClick = props.target.getAttribute('accent') === 'true' ? "bg-success" : "bg-danger";
        if(colorOnClick) {
            props.target.classList.add("colorOnClick");
        }
        console.log("this runs", "colorOnClick");
    }

    render() {
        const words = this.state.words;
        const progress = this.state.progress;
        const actualWord = words[progress];
        console.log(actualWord);

        const letters = [...actualWord].map((c,i) => {
            let isCorrect = false;

            if(i === utils.getAccentIndex(c)){
                isCorrect = true;
                return (
                    <Letter key={i} value={c} onClick={this.handleClick} accent={isCorrect.toString()}></Letter>
                )
            }

            return (
                <Letter key={i} value={c} onClick={this.handleClick}></Letter>
            )
        })

        return (
            <div className={`${styles.accentGame} jumbotron jumbotron-fluid text-center`}>
                <div className={`${styles.accentGameWord} container py-5`}>
                    <h1>Game 1</h1>
                    <div className="container">
                        {letters}
                    </div>
                </div>
            </div>
        )
    }
}

export default Game;