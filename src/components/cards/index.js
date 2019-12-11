
// handleClick is what we are passing into the card as an on click event.

// name

import React from "react"
import "./cards.css"

function CreateCard (props) {

    return(
        // Pass it a function that we will use on App.js to handle the click events
        <div className="card" onClick={() => props.handleClick(props.id)}>
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    )
}

export default CreateCard