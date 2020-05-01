document.addEventListener('DOMContentLoaded', () => {

  const qwertydiv = document.querySelector('#qwerty');
  const phrase = document.querySelector('#phrase');
  var missed = 0;
  const resetButton = document.querySelector('.btn__reset');
  const startButton = document.getElementById('overlay');
  const ul = document.querySelector('ul');
  const button = document.querySelector('button');
  const tries = document.getElementsByTagName('img');

  // quotes from John Maxwell and Dave Ramsey, me
  var phrases = ['There is no substitute for hard work',
    'Creativity requires the willingness to look stupid',
    'No Change No Gain',
    'Act your wage',
    'You have to tell your money what to do or it will leave',
    'You cant be a smart cookie if you have a crummy attitude',
  ];

  startButton.addEventListener('click', (e) => {
      startButton.style.display = "none";
  });

  function getRandomPhraseAsArray(arr) {
    let phraseToGuess = arr[Math.floor(Math.random() * arr.length)];
    return phraseToGuess.split('');
  }

  let charactersToGuess = getRandomPhraseAsArray(phrases);

  function addPhraseToDisplay(arr) {
    //loop over array
    for (let i = 0; i < arr.length; i++) {
      //put each letter in a var as it loops
      const li = document.createElement('li');
      li.textContent = arr[i];
      ul.appendChild(li);
      if (li.textContent == " ") {
        li.className = 'space';
      } else {
        li.className = 'letter';
      }
    }
  }
  addPhraseToDisplay(charactersToGuess);

    function checkLetter(button) {
      const letters = document.querySelectorAll('.letter');
      var match = null;
      for (let i = 0; i < letters.length; i++) {
        //get button's letter
        //compare button against phrase
        var letter = letters[i].textContent;
        //loop throught phrase and compare if button letter matches a
        //letter in phrase, if so make it show up and
        if (letter.toLowerCase() === button.textContent) {
          match = button.textContent;
          letters[i].classList.add('show');
          letters[i].style.width = '75px';
        }
      }
      return match;
    }

    qwertydiv.addEventListener('click', (e) => {
      if (e.target.tagName === 'BUTTON') {
          e.target.classList.add('chosen');
          e.target.disabled = 'true';
        } else {
          return;
        }


    var letterFound = checkLetter(e.target);

    console.log(letterFound);
    if (letterFound === null && missed <= 5) {

      tries[missed].src = 'images/lostHeart.png';
      missed++;
    }
    checkWin();
  });

    function checkWin() {
      var show = document.querySelectorAll('.show');
      var phraseLetters = document.querySelectorAll('.letter');
      var headline = document.querySelector('.title');
      if (phraseLetters.length === show.length){
        startButton.className = 'win';
        startButton.style.display = 'flex';
        resetButton.innerHTML= "Play Again";
        headline.innerHTML = "FANTASTIC, YOU WON!!";
        console.log(headline);

      } else if (missed > 4){
        startButton.className = 'lose';
        startButton.style.display = 'flex';
        headline.innerHTML = "SORRY, YOU LOST :(";
        resetButton.innerHTML= "Play Again";
        console.log(headline);
      }
      }
      resetButton.addEventListener('click', (e) => {
        startButton.style.display = "none";
        resetGame();
      });
      function resetGame() {
        const buttons = document.querySelectorAll('.chosen');
        for (let i = 0; i < buttons.length; i++){
            if (buttons[i].classList.contains('chosen')){
            buttons[i].classList.remove('chosen');
            buttons[i].disabled = 'false';
          }
        }
          for (let i = 0; i <= tries.length; i++) {
            tries[i].src = 'images/liveHeart.png';
            missed = 0;
        }
          for (let i = 0; i <= ul.length; i++){
            ul[i].removeChild(li);
        }

      }

});

// startButton.addEventListener('click', (e) => {
//   if (startButton.classList.contains('win')){
//       resetGame();
//   } else if (startButton.classList.contains('lose')) {
//       resetGame();
//   } else startButton.style.display = "none";
//
// });
