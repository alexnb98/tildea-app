import React, {Component} from 'react';
import data from '../assets/data/GameData';
import Letter from '../components/Letter';
import styles from '../assets/css/Game.module.css';


class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: 0,
            correct: 0,
            withAccent: data.words.map(c => c.withAccent),
            withNoAccent: data.words.map(c => c.withNoAccent),
            progress: 0,
        }
    }

    handleClick(props = "", args = "") {
        const className = props.target.getAttribute('accent') === 'true' ? "bg-success" : "bg-danger";
        if(className) {
            const oldClasses = props.target.className;
            props.target.className = oldClasses + " " + className;
        }
        console.log("this runs", className);
    }

    render() {
        const withAccent = this.state.withAccent;
        const progress = this.state.progress;
        const actualWord = withAccent[progress];

        const letters = [...actualWord].map((c,i) => {
            let isCorrect = false;
            if(i === 9){
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