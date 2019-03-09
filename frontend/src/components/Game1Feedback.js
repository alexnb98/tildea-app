import React from 'react'
import FeedbackWord from "./FeedbackWord"
import data from '../assets/data/Game-1-Data';

const GameFeedback = (props) => {
    console.log(props.history)
    let historyforeachword = props.history.join("").split(" ")
    console.log(historyforeachword)
    let FeedbackWords = data.words.map( (word, i) => 
         <FeedbackWord word={word} history={historyforeachword[i]}/>
    );
    return (
        <>
            {FeedbackWords}
        </>
    )
}

export default GameFeedback;