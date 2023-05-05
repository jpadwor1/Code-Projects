let quizData = [
    {
      question: "What is the capital of France?",
      answers: {
        a: "Madrid",
        b: "Paris",
        c: "London",
        d: "Berlin"
      },
      correctAnswer: "Paris"
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: {
        a: "Mars",
        b: "Jupiter",
        c: "Venus",
        d: "Saturn"
      },
      correctAnswer: "Mars"
    },
    {
      question: "What is the tallest mountain in the world?",
      answers: {
        a: "Mount Everest",
        b: "K2",
        c: "Kangchenjunga",
        d: "Lhotse"
      },
      correctAnswer: "Mount Everest"
    },
    {
      question: "What is the largest ocean in the world?",
      answers: {
        a: "Indian Ocean",
        b: "Atlantic Ocean",
        c: "Pacific Ocean",
        d: "Arctic Ocean"
      },
      correctAnswer: "Pacific Ocean"
    },
    {
      question: "What is the smallest country in the world?",
      answers: {
        a: "Vatican City",
        b: "Monaco",
        c: "Nauru",
        d: "Tuvalu"
      },
      correctAnswer: "Vatican City"
    },
    {
      question: "Who is the creator of Facebook?",
      answers: {
        a: "Steve Jobs",
        b: "Bill Gates",
        c: "Mark Zuckerberg",
        d: "Tim Cook"
      },
      correctAnswer: "Steve Jobs"
    },
    {
      question: "What is the currency of Japan?",
      answers: {
        a: "Yen",
        b: "Won",
        c: "Dollar",
        d: "Euro"
      },
      correctAnswer: "Yen"
    },
    {
      question: "Who painted the famous painting called the Mona Lisa?",
      answers: {
        a: "Vincent van Gogh",
        b: "Leonardo da Vinci",
        c: "Pablo Picasso",
        d: "Michelangelo"
      },
      correctAnswer: "Leonardo da Vinci"
    },
    {
      question: "What is the largest animal in the world?",
      answers: {
        a: "Blue Whale",
        b: "Elephant",
        c: "Giraffe",
        d: "Hippopotamus"
      },
      correctAnswer: "Blue Whale"
    },
    {
      question: "What is the capital of Russia?",
      answers: {
        a: "Saint Petersburg",
        b: "Moscow",
        c: "Kazan",
        d: "Nizhny Novgorod"
      },
      correctAnswer: "Moscow"
    }
  ];

let currentQuestion = 0;
let currentScore = 0;
let score = document.getElementById("score");

const question = document.getElementById("question");
const a = document.getElementById("a-text");
const b = document.getElementById("b-text");
const c = document.getElementById("c-text");
const d = document.getElementById("d-text");
const correctAnswer = document.getElementById("correct");
const optionA = document.getElementById("a");
const optionB= document.getElementById("b");
const optionC = document.getElementById("c");
const optionD = document.getElementById("d");

loadQuiz();

function loadQuiz() {
    
    let currentQuizData = quizData[currentQuestion];
    question.innerHTML = quizData[currentQuestion].question;
    a.innerHTML = currentQuizData.answers.a;
    b.innerHTML = currentQuizData.answers.b;
    c.innerHTML = currentQuizData.answers.c;
    d.innerHTML = currentQuizData.answers.d;
    optionA.value = currentQuizData.answers.a;
    optionB.value = currentQuizData.answers.b;
    optionC.value = currentQuizData.answers.c;
    optionD.value = currentQuizData.answers.d;
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach((radio) => {
      radio.addEventListener("click", () => {
        radios.forEach((otherRadio) => {
          if (otherRadio !== radio) {
            otherRadio.checked = false;
          }
        });
      });
    });
    
}

const radios = document.querySelectorAll('input[type="radio"]');
const submitBtn = document.getElementById("submit-btn");

score.innerHTML = `${currentScore} /10`;
submitBtn.addEventListener("click", () => {
  let selectedAnswer = "";
  radios.forEach((radio) => {
    if (radio.checked) {
      selectedAnswer = radio.value;
    }
  });
  radios.forEach((radio) => {
    radio.checked = false;
  });

  if (quizData[currentQuestion].correctAnswer === selectedAnswer) {
    currentScore++;
  }
  currentQuestion++;
  score.innerHTML = `${currentScore} /10`;
  if (currentQuestion < quizData.length) {
    loadQuiz();
   
  } else {
    alert(`Great job you finished! Final score = ${currentScore}/10`);
  }
});