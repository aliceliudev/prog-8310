let score = 0; highscore = 0;
let _game;
let _penguinAudio;
let _yetiAudio;
let _yeti, _penguins, _score, _current_score, _high_score;
// Define audio files
_penguinAudio = new Audio('penguin.mp3');
_yetiAudio = new Audio('yeti.mp3');


$(document).ready(function() {

    //This code will run after your page loads

    _yeti = document.querySelector("#yeti");
    _penguins = document.querySelectorAll(".penguin");
    _current_score = document.querySelector("#current_score");
    _high_score = document.querySelector("#high_score");
    _score = document.querySelector("#score");
    _game = document.querySelector("#game");

    //Set highscore

    if (sessionStorage.getItem("highscore")) {
        _high_score.innerHTML = sessionStorage.getItem("highscore");
    } else {
        _high_score.innerHTML = 0;
    }

    // Penguin click and Yeti click

    _penguins.forEach(function(_penguin) {
        _penguin.onclick = penguinClick;

    });

    _yeti.onclick = yetiClick;

});


//Define Penguin click
const penguinClick = function() {

    //Caculate the score and add the "data-up" attribute the the elements that have been clicked.
    if (!this.hasAttribute('data-up')) {
        this.setAttribute('data-up', '');
        score += 1;
        _current_score.innerHTML = score;
        console.log(this.id.slice(-1));
        changeImage(this, this.id.slice(-1));
        _penguinAudio.play();

    }
};

// Function for changing background images.

function changeImage(div, i) {
    div.style.backgroundImage = "url('images/penguin_" + i + ".png')";

}


// Yeti click function

const yetiClick = function() {

    // Removethe "data-up" attribute.
    let i; j = 1;
    for (i = 0; i < 8; i++) {
        _penguins[i].removeAttribute('data-up');
        _penguins[i].style.backgroundImage = "url('images/mound_" + j + ".png')";
        j++;
    }

    _yetiAudio.play();

    alert('You lose');
    endGame();
};


const endGame = function() {

    // track high score;

    if (!sessionStorage.getItem("highscore")) {
        sessionStorage.setItem("highscore", score);
    }
    else {
        (sessionStorage.getItem("highscore") >= score) ? "" : sessionStorage.setItem("highscore", score);


    }
    //alert user of their score
    _high_score.innerHTML = sessionStorage.getItem("highscore");

    //reset game
    resetGame();

};


const resetGame = function() {

    const yeti_index = Math.round(Math.random() * (_penguins.length - 1));
    //shuffle penguin yetti
    _game.insertBefore(_yeti, _game.children[yeti_index]);
    score = 0;
    _current_score.innerHTML = score;

};

