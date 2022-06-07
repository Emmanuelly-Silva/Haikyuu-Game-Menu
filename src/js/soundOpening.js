let btnPlay = document.getElementById('btnPlay');
let audio = document.querySelector('audio');
let statusAudio = document.getElementById('sound-status');

btnPlay.onclick = function() {
    if(btnPlay.value === 'disable'){
        audio.play();
        btnPlay.value = 'enable';
        statusAudio.innerHTML = 'On';
        statusAudio.style.right = '6px';
    }
    else{
        audio.pause();
        btnPlay.value = 'disable';
        statusAudio.innerHTML = 'Off';
        statusAudio.style.right = '1px';
    }
}
