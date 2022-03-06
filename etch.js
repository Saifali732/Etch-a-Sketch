// getting the board for the grid
const board = document.querySelector(".board");
const boardSize = 700;

// function to create the grid to draw on
// has a parameter to determine the dimensions to use for the board
function makeBoard(dimension = 16) {
    // figure out the total number of blocks to make
    let squares = dimension * dimension;
    // figure out the size of each square
    let size = boardSize / dimension;
    // add squares to the board
    for (let i = 0; i < squares; i++) {
        let square = document.createElement('div');
        square.className = "square";
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;
        board.append(square);

        // e refers to the event itself
        square.addEventListener("mouseover", (e) => {
            // target is used to select the element that caused the event to start
            // here it was our square div
            // we can select it like this and change the color like so
            e.target.style.backgroundColor = 'black';
            e.target.style.borderColor = 'black';
        })
    }
}
makeBoard();