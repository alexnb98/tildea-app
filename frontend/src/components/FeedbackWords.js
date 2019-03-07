import React from 'react';

const FeedbackWord = props => {
    return (
        <li className={props.className + " display-5 list-group-item d-inline"}>
                {props.children}
        </li>
    )
}

export default FeedbackWord;