let soundOn = document.getElementById("sound-on");
let soundOff = document.getElementById("sound-off");
let audioStatus = document.getElementById("sound-status");
let audio = document.querySelector("audio");

function turnOnSound() {
    soundOff.classList.remove("active");
    soundOn.classList.add("active");
    audioStatus.innerHTML = "ON";
    audio.play();
}

function turnOffSound() {
    soundOn.classList.remove("active");
    soundOff.classList.add("active");
    audioStatus.innerHTML = "OFF";
    audio.pause();
}

soundOff.addEventListener("click", () => {
    turnOnSound();
});

soundOn.addEventListener("click", () => {
    turnOffSound()
});