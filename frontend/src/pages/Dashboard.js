import React from "react"

const Landing = (props) => (
    <div>
        <p>Here comes the Dashboard</p>
        <div>
            <button onClick={() => props.history.push("/tutorial")}>this takes you to the tutorial</button>
        </div>
        <div>
            <button onClick={() => props.history.push("/games")}>this takes you to the games page</button>
        </div>
    </div>
)

export default Landing