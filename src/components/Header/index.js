import React from "react"
import "./header.css"


function Header(props) {
    return(
        <div>
            <nav className="navbar fixed-top">
                <p className="navbar-title">React Clicky-Game</p>
                
                {/* <p className="navbar-score">High Score: {props.highscore}</p> */}
                <p className="navbar-score">Click and image to get started</p>
                <p className="navbar-current-score">Score: {props.score} / 15</p>
            </nav>
        </div>
    )
}

export default Header