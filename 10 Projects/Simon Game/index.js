let green = document.getElementById("green");
let blue = document.getElementById("blue");
let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
const buttonColours = ["red", "blue", "green", "yellow"];
let levelTitle = document.getElementById("level-title");

let randomChosenColour = '';
let gamePattern = [];
let userClickedPattern = [];
let gameStarted = true;
let level = 0;

document.addEventListener("keypress", () => {
    if (gameStarted) {
        resetGame();
        nextSequence();
        levelTitle.innerText = `Level ${level}`;
        gameStarted = false;
    }
})

green.addEventListener("click",() => {
    let userPick = "green";
    animatePress(green);
    handleUserPick(userPick);
});
blue.addEventListener("click",() => {
    let userPick = "blue";
    animatePress(blue);
    handleUserPick(userPick);
});
red.addEventListener("click",() => {
    let userPick = "red";
    animatePress(red);
    handleUserPick(userPick);
});
yellow.addEventListener("click",() => {
    let userPick = "yellow";
    handleUserPick(userPick);
    animatePress(yellow);
});

function animatePress (userPick) {
    userPick.classList.add("pressed")
    setTimeout(() => {
        userPick.classList.remove("pressed")
        
    }, 100);
}


function nextSequence () {
    const randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    flash(randomNumber);
    level++;
    levelTitle.innerText = `Level ${level}`;
}

function handleUserPick (userPick) {
    userClickedPattern.push(userPick);
    if (gamePattern.length ===userClickedPattern.length) {
        checkAnswer(userClickedPattern,gamePattern);
    }
    
}

function flash (colorIndex){
    gamePattern.forEach(pattern => {
        const color = document.getElementById(buttonColours[colorIndex]);
        color.classList.add("pressed")
    setTimeout(() => {
        color.classList.remove("pressed")     
    }, 100);
    })
}


function checkAnswer (userClickedPattern, gamePattern){
    const comparison = JSON.stringify(userClickedPattern) === JSON.stringify(gamePattern)
    console.log(comparison);
    if (comparison === true){
        userClickedPattern.length = 0;
        setTimeout(() => {
            nextSequence();
        }, 500);
        
    } else {
        levelTitle.innerText = 'Game Over! Press A Key to Play Again'
        gameStarted = true;
    }
}

function resetGame() {
    gamePattern.length = 0;
    userClickedPattern.length = 0;
    level = 0;
}