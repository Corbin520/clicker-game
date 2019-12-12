# clicker-game

What this Application Does:

  Once you click on an image, it will store its ID to the "alreadyClicked" array and shuffle the board. Each aditional image you select, it will check if
  the ID of that image matches an ID that is already in the array. IF the image you selected matches an item that is already in the array of clicked images,
  the state turns from "FALSE" to "TRUE" and then the gameOver() function will call. Once the gameOver() function is called, the game is over, it will reset
  the settings of the game the and display the high score. The goal of this game is to get your score to 12 (meaning each image was clicked with no duplicates).