import React from "react"
import "./header.css"


function Header(props) {
    return(
        <div>
            <nav className="navbar fixed-top">
                <p className="navbar-title">React Clicky-Game</p>
                <p className="navbar-score">High Score: {props.highscore}</p>
                <p className="navbar-current-score">Current Score: {props.score}</p>
            </nav>
        </div>
    )
}

export default Header