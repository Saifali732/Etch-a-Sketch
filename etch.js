// getting the board for the grid
const board = document.querySelector(".board");
const boardSize = 600;

//variable to keep track of blocks on each side (30 by default)
let boardDims = 30;
// all of the options that we will use
const black = document.getElementById("black");
const rainbow = document.getElementById("rainbow");
const eraser = document.getElementById("eraser");
const clear = document.getElementById("clear");
const dimensions = document.getElementById("dimensions");
const size = document.getElementById("size");

// button to clear board
clear.addEventListener("click", makeBoard);

//buttons to change the fill mode
black.addEventListener("click", () => changeMode("black"));
rainbow.addEventListener("click", () => changeMode("rainbow"));
eraser.addEventListener("click", () => changeMode("eraser"));

// changes size of the 
dimensions.addEventListener("change", (e) => {
    boardDims = e.target.value;
    clearBoard();
});
dimensions.addEventListener("input", (e) => {
    let tempVal = e.target.value;
    size.textContent = `${tempVal}x${tempVal}`;
});
// variable to keep track of the 
let fillMode = "black";

// function to create the grid to draw on
function makeBoard() {

    // clear board of previous values
    const blocks = board.querySelectorAll(".square");
    blocks.forEach((block) => block.remove());


    // figure out the total number of blocks to make
    let squares = boardDims * boardDims;
    // figure out the size of each square
    let size = boardSize / boardDims;
    // add squares to the board
    for (let i = 0; i < squares; i++) {
        let square = document.createElement('div');
        square.className = "square";
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;
        board.append(square);
    }
    fillBoard();
}

// function to set the method to use for filling the squares
function fillBoard() {
    // first get all of the squares
    const squares = document.querySelectorAll(".square");
    for (const square of squares) {
        square.addEventListener("mouseover", (e) => {
            let space = e.target.style;
            switch (fillMode) {
                case "black":
                    space.backgroundColor = space.borderColor = "black";
                    break;
                case "eraser":
                    space.backgroundColor = "white";
                    space.borderColor = "lightgray";
                    break;
                case "rainbow":
                    // max value is FFFFFF, get random
                    // convert to integer and then back to hex
                    // use padding to color is a 6 digit hex
                    let randomColor = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, 0);
                    space.backgroundColor = space.borderColor = randomColor;
                    break;
            }
        });
    }
}

// function to change the fill mode that the squares are using
function changeMode(mode) {
    fillMode = mode;
}

//function to clear the board
function clearBoard() {
    // remove all squares of our board
    const squares = board.querySelectorAll(".square");
    squares.forEach((square) => square.remove());
    makeBoard();
}

makeBoard();