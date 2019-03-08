import React from 'react';

const FeedbackWord = props => {
    return (
        <ul className="list-group d-flex flex-row mb-3">
                {props.children}
        </ul>
    )
}

export default FeedbackWord;