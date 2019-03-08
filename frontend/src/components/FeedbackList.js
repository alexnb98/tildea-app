import React from 'react';

const FeedbackList = props => {
    return (
        <div className="container d-flex flex-column">
            {props.children}
        </div>
    )
}

export default FeedbackList;