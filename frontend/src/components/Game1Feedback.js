import React from 'react'
import FeedbackWord from "./FeedbackWord"
import data from '../assets/data/Game-1-Data';

const GameFeedback = (props) => {
    //before [2, 5, 6, " ", 2, 6, " "]
    console.log(props.history)
    let historyforeachword = props.history.join("").split(" ")
    // after ["256", "26"]
    console.log(historyforeachword)
    let FeedbackWords = data.words.map( (word, i) => 
         <FeedbackWord word={word} history={historyforeachword[i]} key={i}/>
    );
    return (
        <>
            {FeedbackWords}
        </>
    )
}

export default GameFeedback;