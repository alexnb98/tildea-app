import React from 'react';
import utils from '../utils/utils';

const FeedbackWord = props => {
    const letters = props.word.split("");
    const arrayofwordhistory = props.history.split("")
    
    const separatedLetter = letters.map( (letter, i) => {
        let style = { backgroundColor: "white"}
        if(arrayofwordhistory.includes(letter)){
            style = { backgroundColor: "red" };
            if(utils.hasAccent(letter)){
                style = { backgroundColor: "green"}
            }
        }

        return (
            <p style={style}>{letter}</p>    
        )
    })

    return (
        <div>
            {separatedLetter}
        </div>
    )
}

export default FeedbackWord;