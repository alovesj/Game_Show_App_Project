document.addEventListener('DOMContentLoaded', () => {


  const qwertydiv = document.querySelector('#qwerty');
  const phrase = document.querySelector('#phrase');
  var missed = 0;
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
    console.log(phraseToGuess);
    return phraseToGuess.split('');

  };

  let charactersToGuess = getRandomPhraseAsArray(phrases);


  function addPhraseToDisplay(arr) {
    //loop over array
    for (let i = 0; i < arr.length; i++) {
      //put each letter in a var as it loops
      const li = document.createElement('li');
      li.textContent = arr[i];
      console.log(li);
      ul.appendChild(li);
      if (li.textContent == " ") {
        li.className = 'space';
      } else {
        li.className = 'letter';
      }
    }
  };
  addPhraseToDisplay(charactersToGuess);


  qwertydiv.addEventListener('click', (e) => {

    if (e.target.classList.contains('chosen')){
      alert('already chosen');
      return;
    };


    var match = 0;
    const tries = document.querySelector('ol');
    const li = tries.childNode;

    function checkLetter(button) {


      const letters = document.querySelectorAll('.letter');

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
          console.log(match);
          letters[i].classList.add('show');

        } else {
          // return 'null';
          console.log('null');
          console.log(missed);

        }
      } e.target.classList.add('chosen');
      return match;
      missed++
    };
    checkLetter();

});


  // if (e.target.classlist === 'chosen') {
  //   alert("letter already chosen");
  //}
  //get all letters in random phrase


  //var checked =

  // if (checked === 'null') {
  //   tries.remove.childNode;
  //   ++missed;
  // }

});
//When I click on a letter not in phrase, I need it to count up 1 miss

//and mark letter as already attempted.
