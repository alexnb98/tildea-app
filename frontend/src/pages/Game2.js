import React from "react";

const Game2 = (props) => (
    <div>
        <div className="jumbotron jumbotron-fluid text-center">
            <div className="container py-5">
                <h1>Game 2</h1>
                <h2>the route param is {props.match.params.id || "not here"}</h2>
            </div>
        </div>
    </div>
)

export default Game2;