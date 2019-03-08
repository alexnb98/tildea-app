import React from 'react';

const FeedbackLetter = props => {
    return (
        <li className={(props.className || null) + " display-5 list-group-item  ml-1"}>
                {props.children}
        </li>
    )
}

export default FeedbackLetter;