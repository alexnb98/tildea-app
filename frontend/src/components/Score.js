import React from 'react'

const Score = props => {
    return (
        <div className="container d-flex flex-row justify-content-around">
            <h2 className="text-success">Score:
                            <span className="h2"> {props.score}</span>
            </h2>
            <h2 className="text-danger">Mistakes:
                            <span className="h2"> {props.mistakes}</span>
            </h2>
            <h2 className="text-primary">Words remaining:
                            <span className="h2"> {props.wordsRemaining}</span>
            </h2>
        </div>
    )
}

export default Score;