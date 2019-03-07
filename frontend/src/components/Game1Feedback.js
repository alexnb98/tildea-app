import React from 'react'
import {Link} from 'react-router-dom';

// TODO update hard coded routes

const GameFeedback = (props) => {
    if(props.end) {
        return (
            <div className="container d-flex flex-column text-left">
                <div className="container d-flex flex-row justify-content-around">
                    <h2>Score: {props.score}</h2>
                    <h2 className="mb-5">Mistakes: {props.mistakes}</h2>
                </div>
                <div className="container flex-column text-center">
                    <ul className="list-group">
                        <li className="list-group-item">{props.wordsRecap}</li>
                    </ul>
                </div>

                <div className="d-flex justify-content-around mt-5">
                    <button className="btn btn-success">
                        <Link to="/" className="text-white">Next Level</Link>
                    </button>
                    <button className="btn btn-primary">
                        <Link to="/game/:id" className="text-white">Try Again</Link>
                    </button>
                    <button className="btn btn-danger">
                        <Link to="/dashboard" className="text-white">Go To Dashboard</Link>
                    </button>
                </div>
            </div>
        )
    }
    return null;
}

export default GameFeedback;