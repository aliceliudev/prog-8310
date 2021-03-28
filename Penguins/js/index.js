let score = 0; highscore = 0;
let _game;

let _yeti, _penguins, _score, _current_score, _high_score;

let clicked_penguins = [];
const difficulty = {
    easy: 3,
    medium: 4,
    hard: 5
};


const renderGame = function() {
    const _gameHolder = document.querySelector('#gameHolder');
    for (a = 0; a < difficulty; a++) {
        for (b = 0; b < difficulty; b++) {
            const _penguin = document.createElement('div');
            _penguin.setAttribute('class', 'penguin');
            _gameHolder.appendChild(_penguin);
        }
    }
};

$(document).ready(function() {

    //This code will run after your page loads

    _yeti = document.querySelector("#yeti");
    _penguins = document.querySelectorAll(".penguin");
    _current_score = document.querySelector("#current_score");
    _high_score = document.querySelector("#high_score");
    _score = document.querySelector("#score");


    //$("#yeti").mousedown(function() {
    //   alert("Yaaaarrrr!");
    // });

    //Jquery event handling

    /* $(".penguin").mousedown(function(){
 
         console.log('penguin clicked with jquery');
 
     });*/

    // JS Event handling

    _penguins.forEach(function(_penguin) {
        _penguin.onclick = penguinClick;
    });

    _yeti.onclick = yetiClick;




});



const penguinClick = function() {

    /*if (!this.classList.contains('up')) {
        this.classList.add('up');
        clicked
        //onsole.log('penguin click');
        score += 1;
        _current_score.innerHTML = score;
    }
        */


    /*if (!this.classList.contains('up')) {
        this.classList.add('up');
        score += 1;
        _current_score.innerHTML = score;
    } */
    /*if (this.getAttribute('class').indexOf('up') > -1) {
        this.classList.add('up');
        score += 1;
        _current_score.innerHTML = score;
    }
   */
    if (!this.hasAttribute('data-up')) {
        this.setAttribute('data-up', '');
        score += 1;
        _current_score.innerHTML = score;


    }

};



const yetiClick = function() {
    console.log('yeti click');
    //setTimeout(endGame, 2000);
    alert('You lose');
    endGame();



};


const endGame = function() {
    // track high score;

    //alert user of their score

    //reset game

};


const resetGame = function() {
    score = 0;
    _score.innerHTML = score;

    //shuffle penguin yetti
    renderGame();

};