import React, {Component} from 'react';
import data from '../assets/data/GameData';
import Letter from '../components/Letter';

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
        const className = props.target.getAttribute('accent') === 'true' ? 'correct' : 'false';
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
            <div className="accents-game">
                <div className="accents-game__word">
                        {letters}
                </div>
            </div>
        )
    }
}

export default Game;