const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const missed = 0;
const div = document.getElementById('overlay');
const ul = document.querySelector('ul');
const li = document.createElement('li');


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

// var charactersToGuess = [];

function getRandomPhraseAsArray(arr) {
  let randomNumber = Math.floor(Math.random() * 5) +1;
  console.log(randomNumber);
  let phraseToGuess = arr[randomNumber];
  let charactersToGuess = Array.from(phraseToGuess);
  //var charactersToGuess = phraseToGuess.split();
    console.log(phrases[randomNumber]);
    console.log(charactersToGuess);
    return charactersToGuess;
};

getRandomPhraseAsArray(phrases);


function addPhraseToDisplay(arr) {
  //loop over array
  for (let i = 0; i <= arr.length; i++) {
  //put each letter in a var as it loops
      const letters = arr[i];
      const li = document.createElement('li');

      console.log(letters);
      ul.appendChild(li);

  }

    // if (li != ' ' ){
    //   li.className = 'letter';


    // }
};
addPhraseToDisplay(phrases);
