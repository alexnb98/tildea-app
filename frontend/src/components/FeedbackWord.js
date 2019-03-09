import React from 'react';
import utils from '../utils/utils';

const FeedbackWord = props => {
    const letters = props.word.split("");
    const clickedLetterIndex = props.history.split("")
    
    const separatedLetter = letters.map( (letter, i) => {
        let style = { backgroundColor: "white"}
        if (clickedLetterIndex.includes(i.toString())) {
            style = {backgroundColor: "red"}
        }
        if ( utils.hasAccent(letter) ) {
            style = {backgroundColor: "green"}
        }
        return (
            <p style={style} key={i}>{letter}</p>    
        )
    })

    return (
        <div>
            {separatedLetter}
        </div>
    )
}

export default FeedbackWord;