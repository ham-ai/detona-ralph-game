const state = {
    
    view:{
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score")
    },

    value:{
            timerId:null,
            gameVelocity:1000
    }
}

function moveEnemy(){
    state.values.timerId = setInterval(randomSquare, state.values.gameVelocity);
}

function randomSquare(){
    state.view.squares.forEach((square) =>{
        square.classList.remove("enemy");
    })

    let randomNumber = Math.floor(Math.random()*9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy"); 
}

function addListenerHitbox(){
    state.view.squares.forEach((square) => {
    });
}

function init(){
    moveEnemy();
}

init();