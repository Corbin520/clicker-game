import React, { Component } from "react";
import './App.css';
import CreateCard from "./components/cards"
import clickers from "./clickers.json";
import Wrapper from "./components/wrapper"
import Header from "./components/Header"







// * full circle
  // Once you click on an image, it will store its ID to the "alreadyClicked" array and shuffle the board. Each aditional image you select, it will check if
  // the ID of that image matches an ID that is already in the array. IF the image you selected matches an item that is already in the array of clicked images,
  // the state turns from "FALSE" to "TRUE" and then the gameOver() function will call. Once the gameOver() function is called, the game is over, it will reset
  // the settings of the game the and display the high score. The goal of this game is to get your score to 12 (meaning each image was clicked with no duplicates).

  



var alreadyClicked = []



class App extends Component {


  state = {
    clickers,
    score: 0,
    highscore: 0,
    maxscore: 15

  };



  // This function will control the game over functions
  gameOver = () => {


    console.log("Game Over was fired")

    // set the score to 0
    this.setState({ score: this.state.score = 0 })

    alert("You Lost")
    
  }

  youWon = () => {
    alert("YOU WON!!!!!")
    console.log("youWon function fired off")
    window.location.reload()
  }


  


// High Level of this function: imageClicked() 

  // 1) .find() the id of the clicker that you clicked (image)
  // 2) if (the element.id is the same as the imageClicked (===) then run the following block of code)
  // 3) Once the item is clicked, push it to an array to keep track of which ones have been clicked
  // 4) check the user choice and see if the array has that choice already
    // IF so, change the status of "buttonClicked" to "TRUE" && if its "TRUE" call the gameOver() function
  // 5) if it has not been clicked yet, call our else statement and shuffle the clickers.



  // function for clickers
  imageClicked = id => {

    // All these variables can be consoled to see what they do.
    const imageClick = id
    const status = this.state.clickers
    const clicked = this.state.clickers

    // index gets reassigned to this at the bottom of the function
    let indexOfCardClicked; // = whatever the index of the array was clicked


    // find the card that was clicked
    clicked.find(function (element, index) {
      if (element.id === imageClick) {

        console.log("You Clicked ID: " + id)

        // This loop will loop over our array of items clicked and compair them.
        for (var i = 0; i < alreadyClicked.length; i++) {
          if (alreadyClicked[i] === id) {


            // returns false on page load, we want it to turn true if they already clicked the sane image
            status[index].buttonClicked = true;

          }
          
        }

        // pushing the ID of the item that is clicked to our array
        alreadyClicked.push(id)


        // return the index that was clicked
        // index will become the "returnedArray" variable (let)
        // indexOfCardClicked === the index the image is currently at in the game
        indexOfCardClicked = index;


        // returning the index
        return index;

      } else {

        return false;

      }

    });

    // clicked[indexOfCardClicked].buttonClicked === false (default)
        // if we change this to true, it will run the if statment that calls our game over function





    // this if statement is just saying if the status is still set to === false (default when the page loads || no duplicate images have been clicked) 
    // then run the else statement, shuffle the bored and update the score

    // if the same item has been clicked, this will be changed to *true*, then it calls the game over function
    if (clicked[indexOfCardClicked].buttonClicked === true) {

      // Call the game over function
      this.gameOver()
      console.log("True Statement is running")

    } else {

      // Adding 1 to the score for each click
      this.setState({ score: this.state.score + 1 })

      if (this.state.score >= this.state.maxscore -1) {
          this.youWon()
      }

      //shuffle the clickers
      this.state.clickers.sort(() => Math.random() - 0.5)

    }


  }




  // render our page
  render() {
    return (

      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore} />
        {/* Add title */}
        {this.state.clickers.map(clickers => (
          <CreateCard
            id={clickers.id}
            key={clickers.id}
            image={clickers.image}
            handleClick={this.imageClicked}
          />
        ))}
      </Wrapper>
    )
  }
}


export default App;