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

        if(idSelected === 'Hinata'){
            namePlayer1.style.left = '30%';
        }
        else if(idSelected === 'Nishinoya') {
            namePlayer1.style.left = '28%';
        }
        else if(idSelected === 'Sawamura') {
            namePlayer1.style.left = '23%';
        }
        else if(idSelected === 'Sugawara') {
            namePlayer1.style.left = '19.7%';
        }
        else if(idSelected === 'Tanaka') {
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

        if(idSelected === 'Hinata' || idSelected === 'Azumane' || idSelected === 'Tsukishima'){
            namePlayer2.style.right = '25%';
        }
        else if(idSelected === 'Kageyama' || idSelected === 'Sawamura' || idSelected === 'Sugawara'){
            namePlayer2.style.right = '20%';
        }
        else if(idSelected === 'Nishinoya'){
            namePlayer2.style.right = '29%';
        }
        else {
            namePlayer2.style.right = '16%';
        }

        namePlayer2.innerHTML = nameSelected;

    })
})