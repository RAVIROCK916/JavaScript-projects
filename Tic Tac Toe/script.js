const gameBoard = document.querySelector("#game-board");

const info = document.querySelector("#info");

let cells = ["", "", "", "", "", "", "", "", ""];

let currMark = "circle";
info.textContent = `${currMark}'s turn`;

const checkScore = () => {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    let allSquares = document.querySelectorAll(".square");

    winningCombos.forEach((combo) => {
        const isCircle = combo.every((cell) =>
            allSquares[cell].firstChild?.classList.contains("circle")
        );
        if (isCircle) {
            info.textContent = "O wins";
            allSquares.forEach((square) => {
                square.replaceWith(square.cloneNode(true));
            });
            return;
        }
        const isCross = combo.every((cell) =>
            allSquares[cell].firstChild?.classList.contains("cross")
        );
        if (isCross) {
            info.textContent = "X wins";
            allSquares.forEach((square) => {
                square.replaceWith(square.cloneNode(true));
            });
            return;
        }
    });
};

const addMark = (e) => {
    let mark = document.createElement("div");
    mark.classList.add(currMark);
    e.target.append(mark);
    e.target.removeEventListener("click", addMark);
    currMark = currMark === "circle" ? "cross" : "circle";
    if (currMark === "circle") info.textContent = "X turn";
    else info.textContent = "O turn";

    checkScore();
};

cells.forEach((cell, index) => {
    let cellElement = document.createElement("div");
    cellElement.classList.add("square");
    cellElement.id = index;
    cellElement.addEventListener("click", addMark);
    gameBoard.append(cellElement);
});
