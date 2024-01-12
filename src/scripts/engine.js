const state = {
    
    view:{
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score")
    },

    value:{
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        time: 60,
    },
    
    actions:{
        timerId: setInterval(randomSquare, 1000),
        countdownTimer: setInterval(countDown, 1000),
    }
}

function playSound(audioName) {
    let audio = new Audio(`./src/audios/${audioName}.mp3`);
    audio.volume = 0.2;
    audio.play();
}

function countDown(){
    state.value.time--;
    state.view.timeLeft.textContent = state.value.time;

    if(state.value.time <= 0){
        clearInterval(state.actions.countdownTimer);
        clearInterval(state.actions.timerId);
        alert("O jogo acabou!\nSua pontuação foi... "+ state.value.result);
    }
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
                playSound("ring");
            }
        });
    });
}


// main function
function init(){
    addListenerHitbox();
}

init();