const qwertydiv = document.querySelector('#qwerty');
const phrase = document.querySelector('#phrase');
const missed = 0;
const div = document.getElementById('overlay');
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


div.addEventListener('click', (e) => {
  div.style.display = "none";
});

function getRandomPhraseAsArray(arr) {
  let phraseToGuess = arr[Math.floor(Math.random() * arr.length)];
    console.log(phraseToGuess);
    return phraseToGuess.split('');

};

let charactersToGuess = getRandomPhraseAsArray(phrases);


function addPhraseToDisplay(arr) {
  //loop over array
  for (let i = 0; i < arr.length; i ++) {
  //put each letter in a var as it loops
      const li = document.createElement('li');
      li.textContent = arr[i];
      console.log(li);
      ul.appendChild(li);
      if(li.textContent == " ") {
        li.className = 'space';
      } else {
        li.className = 'letter';
    }
  }
};
addPhraseToDisplay(charactersToGuess);


qwertydiv.addEventListener('click', (e) => {

  function checkLetter(button) {
    //get all letters in random phrase
    const letters = document.querySelectorAll('.letter');
    var match = 0;
    var letter = 0;
    for (let i = 0; i < letters.length; i++) {
      //get button's letter
      //compare button against phrase
      var letter = letters[i].textContent;
      console.log(letter);
      console.log(letter.toLowerCase());
      if (letter.toLowerCase() === e.target.textContent) {
        console.log('match');
        var match = e.target.textContent;
        letters[i].classList.add('show');
        //return match;

      }else {
        //missed += 1;

        console.log('null');

      }

    } return match;

  };

  checkLetter();

});
