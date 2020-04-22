document.addEventListener('DOMContentLoaded', () => {

  const qwertydiv = document.querySelector('#qwerty');
  const phrase = document.querySelector('#phrase');
  var missed = 0;
  const resetButton = document.querySelector('.btn__reset');
  const startButton = document.getElementById('overlay');
  const ul = document.querySelector('ul');
  const button = document.querySelector('button');

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
        }
      }
      return match;
    }

    qwertydiv.addEventListener('click', (e) => {
      if (e.target.classList.contains('chosen')) {
        alert('already chosen');
        return;
      } else {
        e.target.classList.add('chosen');
      }

    var letterFound = checkLetter(e.target);
    console.log(letterFound);
    if (letterFound === null) {
      var tries = document.getElementsByTagName('img')[missed];
      tries.src = 'images/lostHeart.png';
      missed++;
    }
    checkWin();
  });

    function checkWin() {
      var show = document.getElementsByClassName("show");
      var phraseLetters = document.getElementsByClassName('letter');
      if (phraseLetters.length === show.length){
        startButton.style.display = 'flex';
       }
      }

});
