let player = document.getElementById("player");
let message = document.getElementById("message");
let audioMessage = document.getElementById("audioMessage");

let crowd = document.getElementById("crowd");
let whistle = document.getElementById("whistle");
let basket = document.getElementById("basket");


crowd.addEventListener("click", playAudio);
whistle.addEventListener("click", pauseAudio);
basket.addEventListener("click", restartAudio);


function playAudio() {
    player.play();
    crowd.style.width = "250px";
    whistle.style.width = "200px";
    basket.style.width = "200px";
    message.innerHTML = "The crowd is cheering!";
}


function pauseAudio() {
    player.pause();
    crowd.style.width = "200px";
    whistle.style.width = "250px";
    basket.style.width = "200px";
    message.innerHTML = "The referee stops the game!";
}


function restartAudio() {
    player.currentTime = 0;
    player.play();
    crowd.style.width = "200px";
    whistle.style.width = "200px";
    basket.style.width = "250px";
    message.innerHTML = "The game starts again!";
}


player.addEventListener("play", playerStarted);
player.addEventListener("ended", playerEnded);

function playerStarted() {
    audioMessage.innerHTML = "The game is on!";
}

function playerEnded() {
    audioMessage.innerHTML = "The game is over!";
}