const charactersPlayer1 = document.querySelectorAll('.player-1 .character');

charactersPlayer1.forEach((character) => {
    character.addEventListener('click', () => {
        const characterSelected = document.querySelector('.selected');
        characterSelected.classList.remove('selected');
        character.classList.add('selected');

        const idSelected = character.attributes.id.value;

        const imagePlayer1 = document.getElementById('character-player-1');
        imagePlayer1.src = `./src/Images/${idSelected}.png`;

        const namePlayer1 = document.getElementById('character-name-1');
        const nameSelected = character.getAttribute('data-name');

        if(idSelected === 'hinata'){
            namePlayer1.style.left = '30%';
        }
        else if(idSelected === 'nishinoya') {
            namePlayer1.style.left = '28%';
        }
        else if(idSelected === 'sawamura') {
            namePlayer1.style.left = '23%';
        }
        else if(idSelected === 'sugawara') {
            namePlayer1.style.left = '19.7%';
        }
        else if(idSelected === 'tanaka') {
            namePlayer1.style.left = '18%';
        }
        else {
            namePlayer1.style.left = '24.8%';
        }
        
        namePlayer1.innerHTML = nameSelected;
    })
})

const charactersPlayer2 = document.querySelectorAll('.player-2 .character');

charactersPlayer2.forEach((character) => {
    character.addEventListener('click', () => {
        const characterSelected = document.querySelector('.selected-player-2');
        characterSelected.classList.remove('selected-player-2');
        character.classList.add('selected-player-2');

        const idSelected = character.attributes.id.value;

        const imagePlayer2 = document.getElementById('character-player-2');
        imagePlayer2.src = `./src/Images/${idSelected}.png`;

        const namePlayer2 = document.getElementById('character-name-2');
        const nameSelected = character.getAttribute('data-name');

        if(idSelected === 'hinata' || idSelected === 'azumane' || idSelected === 'tsukishima'){
            namePlayer2.style.right = '25%';
        }
        else if(idSelected === 'kageyama' || idSelected === 'sawamura' || idSelected === 'sugawara'){
            namePlayer2.style.right = '20%';
        }
        else if(idSelected === 'nishinoya'){
            namePlayer2.style.right = '29%';
        }
        else {
            namePlayer2.style.right = '16%';
        }

        namePlayer2.innerHTML = nameSelected;

    })
})