const state = {
    
    view:{
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score")
    },

    value:{
            timerId: null,
            gameVelocity: 1000,
            hitPosition: 0,
            result: 0,
    }
}

function moveEnemy(){
    state.value.timerId = setInterval(randomSquare, state.value.gameVelocity);
}

function randomSquare(){
    state.view.squares.forEach((square) =>{
        square.classList.remove("enemy");
    })

    let randomNumber = Math.floor(Math.random()*9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy"); 
    state.value.hitPosition = randomSquare.id;
}

function addListenerHitbox(){
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if(square.id === state.value.hitPosition){
                state.value.result++;
                state.view.score.textContent = state.value.result;
                state.value.hitPosition = null;
            }
        });
    });
}



// main function
function init(){
    moveEnemy();
    addListenerHitbox();
}

init();