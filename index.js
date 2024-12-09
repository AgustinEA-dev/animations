
//Color Board/EventDelegation

const boardContainer = document.querySelector(".color-board")
const resetBoardButton = document.querySelector(".reset-button")

for (let i = 0; i < 16; i++) {
    const boardSquare = document.createElement("div")
    boardSquare.classList.add("board-square")
    boardContainer.appendChild(boardSquare)
}

// Event Delegation function ------------------------------------>

function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, (e) => {
        if (e.target.matches(selector)) {
            callback(e)
        }
    })
}

addGlobalEventListener("click", ".board-square", (e) => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    const newColor = `rgb(${r},${g},${b})`
    e.target.classList.add("board-square-flip")
    e.target.style.backgroundColor = newColor
})

// ------------------------------------------------------------->

resetBoardButton.addEventListener("click", () => {
    const allSquares = document.querySelectorAll(".board-square")
    allSquares.forEach(square => {
        square.classList.remove("board-square-flip")
        square.style.backgroundColor = "var(--background-color4)"
    })
})

const esphereContainer = document.querySelector(".esphere-container");
const esphere = document.querySelector(".esphere");

esphereContainer.addEventListener("click", (e) => {
    let bounds = esphereContainer.getBoundingClientRect();
    let x = e.clientX - bounds.left - esphere.clientWidth / 2;
    let y = e.clientY - bounds.top - esphere.clientHeight / 2;
    esphere.style.transform = `translateX(${x}px) translateY(${y}px)`;
});

//Animated Squares/Keyframes

const playButton = document.querySelector(".play-button")
const square = document.querySelectorAll(".square")

playButton.addEventListener("click", () => {
    square.forEach((square) => {
        square.classList.toggle("running")
        if (square.classList.contains("running")) {
            playButton.innerText = "PAUSE ANIMATION"
        } else playButton.innerText = "START ANIMATION"
    })
})

// // Dragable HTML Element

let newX = 0, newY = 0, startX = 0, startY = 0

const card = document.querySelector(".card")
const cardContainer = document.querySelector(".card-container")

cardContainer.addEventListener("mousedown", mouseDown)

function mouseDown(e) {
    startX = e.clientX
    startY = e.clientY

    cardContainer.addEventListener("mousemove", mouseMove)
    document.addEventListener("mouseup", mouseUp)
}

function mouseMove(e) {
    let bounds = cardContainer.getBoundingClientRect()
    console.log(bounds)

    newX = startX - e.clientX 
    newY = startY - e.clientY

    startX = e.clientX
    startY = e.clientY

    card.style.top = (card.offsetTop - newY) + "px"
    card.style.left = (card.offsetLeft - newX) + "px"

    console.log({ newX, newY })
    console.log({ startX, startY })
}

function mouseUp(e) {
    cardContainer.removeEventListener("mousemove", mouseMove)
}
