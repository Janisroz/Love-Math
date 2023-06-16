//wait for page to finish loading before starting game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});

/**
 * The main game "loop", called when the script is first loaded
 * and after the users answer has been processed
 */

function runGame() {

    // Creates two random numbers between 1 and 25
    let num 1 = Math.floor(Math.random() * 25) + 1
    let num 2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

