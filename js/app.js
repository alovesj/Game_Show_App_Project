const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const missed = 0;
const div = document.getElementById('overlay');
const ul = document.getElementById('phrase');

const li = document.createElement('li');

// quotes from John Maxwell and Dave Ramsey
var phrases = ['There is no substitute for hard work',
              'Creativity requires the willingness to look stupid',
              'We cannot lead anyone farther than we have been ourselves',
              'Act your wage',
              'You have to tell your money what to do or it will leave',
              'You cant be a smart cookie if you have a crummy attitude'
            ];


div.addEventListener('click', (e) => {
  div.style.display = "none";
  console.log(phrases);
});

var randomNumber = Math.floor( Math.random() * 6 ) + 1;
var phraseToGuess = phrases[randomNumber];
var charactersToGuess = Array.from(phraseToGuess);

function getRandomPhraseAsArray(phrases) {

  console.log(phrases[randomNumber]);
  console.log(charactersToGuess,'');
  return charactersToGuess;
};
getRandomPhraseAsArray(phrases);


// const arr = Array.from(getRandomPhraseAsArray(phrases));
//
// function addPhraseToDisplay(arr) {
//   for (let i=0; i<= arr.length; i++) {
//
//   } const letter = arr[i];
//     ul.appendChild(li);
//     if (letter != ' ' ){
//       li.className = 'letter';
//
//
//     }
// };
// addPhraseToDisplay(charactersToGuess);

//call function
getRandomPhraseAsArray(phrases);
