//Animated squares/Keyframes

const puaseButton = document.querySelector(".pause")
const square = document.querySelectorAll(".square")

puaseButton.addEventListener("click", () => {
    square.forEach((square) => square.classList.toggle("paused"))
})

//Color board/EventDelegation

const boardContainer = document.querySelector(".color-board")
const resetBoardButton = document.querySelector(".reset-button")

for (let i = 0; i < 21; i++) {
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
        square.style.backgroundColor = "var(--background-color)"
    })
})

//Move Espehere On Click

const esphereContainer = document.querySelector(".esphere-container")

document.addEventListener("click", (e) => {
    const esphere = document.querySelector(".esphere")
    let x = e.screenX
    let y = e.screenY
    esphere.style.transform = `translateX(${x}px) translateY(${y}px)`
})
