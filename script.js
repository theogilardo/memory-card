addContainer = document.getElementById('add-container');
completeCard = document.getElementById('complete-card');
addBtn = document.getElementById('btn-add');
crossBtn = document.getElementById('cross-btn');
memoryContainer = document.getElementById('memory-card');
questionInput = document.getElementById('question-input');
answerInput = document.getElementById('answer-input');
question = document.getElementById('question');
answer = document.getElementById('answer');
flip = document.getElementById('flip');
front = document.getElementById('front');
back = document.getElementById('back');
deleteAll = document.getElementById('delete');
arrowFront = document.getElementById('arrow-front');
arrowBack = document.getElementById('arrow-back');
numberCards = document.getElementById('number-cards');

let ID = 1;
let memoryNumber = 1;
let memoryArr = [];
const random = Math.floor(Math.random() * memoryArr.length);

const memoryCard = function(question, answer, id) {
  this.question = question;
  this.answer = answer;
  this.id = id;
}

// Add a memory card
addBtn.addEventListener('click', () => {
  addContainer.classList.add('show');

  // Focus on question input
  questionInput.focus();
})

// Confirm new memory card
completeCard.addEventListener('click', addMemCard);

document.addEventListener('keyup', e => {
  if (e.keyCode === 13) {
    addMemCard();
  }
});

// Remove box add new card and go back to menu
crossBtn.addEventListener('click', () => {
  addContainer.classList.remove('show');
})

// Flip to get answer
flip.addEventListener('click', () => {
  front.classList.toggle('rotate');
  back.classList.toggle('rotate-back');
})

// Delete all memory cards
deleteAll.addEventListener('click', () => {
  memoryArr = [];
  ID = 0;
  memoryNumber = 0;
  numberCards.textContent = ``;
  memoryContainer.classList.remove('show');
})

// Move to previous/next memory card

  //Move front
  arrowFront.addEventListener('click', () => {
    // const random = Math.floor(Math.random() * memoryArr.length)
    if (memoryNumber < memoryArr.length) {
      memoryNumber ++
      numberCards.textContent = `${memoryNumber}/${memoryArr.length}`;
      question.textContent = `${memoryArr[memoryNumber - 1].question}`;
      answer.textContent = `${memoryArr[memoryNumber - 1].answer}`;
    }
  })

  //Move back
  arrowBack.addEventListener('click', () => {
    // const random = Math.floor(Math.random() * memoryArr.length)
    if (memoryNumber > 1) {
      memoryNumber --
      numberCards.textContent = `${memoryNumber}/${memoryArr.length}`;
      question.textContent = `${memoryArr[memoryNumber - 1].question}`;
      answer.textContent = `${memoryArr[memoryNumber - 1].answer}`;
    }
  });

  function addMemCard() {
  // Store new memory card data
  const newCard = new memoryCard(questionInput.value, answerInput.value, ID);
  memoryArr.push(newCard);

  // Reset input question and answer text
  questionInput.value = '';
  answerInput.value = '';

  // Increment ID`
  ID ++

  // Display menu back
  addContainer.classList.remove('show');
  memoryContainer.classList.add('show');

  // Display data of new memory card
  question.textContent = `${memoryArr[random].question}`;
  answer.textContent = `${memoryArr[random].answer}`;

  // Update number of memory cards
  numberCards.textContent = `1/${memoryArr.length}`;
};

