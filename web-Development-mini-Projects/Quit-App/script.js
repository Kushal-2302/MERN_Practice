const questions = {
  Science: [
    { question: "What is H2O?", options: ["Oxygen", "Water", "Hydrogen", "Carbon"], answer: "Water", explanation: "H2O is the chemical formula for water." },
    { question: "Which planet is closest to the Sun?", options: ["Venus", "Mercury", "Earth", "Mars"], answer: "Mercury", explanation: "Mercury is the closest planet to the Sun." }
  ],
  History: [
    { question: "Who was the first President of the USA?", options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"], answer: "George Washington", explanation: "George Washington served as the first U.S. President." },
    { question: "In which year did World War II end?", options: ["1945", "1939", "1918", "1960"], answer: "1945", explanation: "World War II ended in 1945." }
  ],
  Sports: [
    { question: "How many players in a football team?", options: ["9", "10", "11", "12"], answer: "11", explanation: "A football team has 11 players on the field." },
    { question: "Which country won the 2018 FIFA World Cup?", options: ["Brazil", "Germany", "France", "Argentina"], answer: "France", explanation: "France won the 2018 FIFA World Cup." }
  ]
};

let currentCategory = "";
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const restartBtn = document.getElementById("restartBtn");
const explanationEl = document.getElementById("explanation");
const timerEl = document.getElementById("timer");
const leaderboardList = document.getElementById("leaderboardList");

function startQuiz(category) {
  currentCategory = category;
  currentQuestionIndex = 0;
  score = 0;
  document.getElementById("categorySelect").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  clearInterval(timer);
  timeLeft = 15;
  timerEl.textContent = `Time left: ${timeLeft}s`;
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `Time left: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      nextBtn.style.display = "block";
      explanationEl.textContent = "Time's up!";
    }
  }, 1000);

  const currentQuestion = shuffleArray(questions[currentCategory])[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  optionsEl.innerHTML = "";
  explanationEl.textContent = "";
  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option");
    button.addEventListener("click", () => selectAnswer(option, currentQuestion));
    optionsEl.appendChild(button);
  });
}

function selectAnswer(option, currentQuestion) {
  clearInterval(timer);
  if (option === currentQuestion.answer) {
    score++;
    explanationEl.textContent = "✅ Correct! " + currentQuestion.explanation;
  } else {
    explanationEl.textContent = "❌ Wrong! " + currentQuestion.explanation;
  }
  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions[currentCategory].length) {
    showQuestion();
    nextBtn.style.display = "none";
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  resultEl.classList.remove("hidden");
  scoreEl.textContent = `${score} / ${questions[currentCategory].length}`;
  updateLeaderboard(currentCategory, score);
}

restartBtn.addEventListener("click", () => {
  document.getElementById("categorySelect").classList.remove("hidden");
  resultEl.classList.add("hidden");
  nextBtn.style.display = "none";
});

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Leaderboard using localStorage
function updateLeaderboard(category, score) {
  let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
  leaderboard.push({ category, score });
  localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
  displayLeaderboard();
}

function displayLeaderboard() {
  leaderboardList.innerHTML = "";
  let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
  leaderboard.forEach(entry => {
    const li = document.createElement("li");
    li.textContent = `${entry.category}: ${entry.score}`;
    leaderboardList.appendChild(li);
  });
}

// Initialize leaderboard
displayLeaderboard();
