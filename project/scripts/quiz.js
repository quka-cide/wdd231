import LoadQuiz from "./LoadQuiz.mjs";

const submitBtn = document.getElementById("submit-btn");
const resultText = document.getElementById("result");

async function fetchData() {
    const response = await fetch("./data/data.json");
    const data = await response.json();
    LoadQuiz(data.quizData);
}

function calculateScore() {
    let score = 0;
    quizData.forEach((q, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        if (selected && selected.value === q.answer) {
            score++;
        }
    });
    localStorage.setItem("quake4BestScore", Math.max(score, localStorage.getItem("quake4BestScore") || 0));
    resultText.innerHTML = `Great job ${userName ? userName : ''}! Your score is ${score} out of ${quizData.length}. Best Score: ${localStorage.getItem("quake4BestScore")}`;
}

let userName = "";
let quizData = [];

const openBtns = document.querySelectorAll('[data-dialog]');
openBtns.forEach(button => {
  button.addEventListener('click', function () {
    const dialogId = this.getAttribute('data-dialog');
    const dialog = document.getElementById(dialogId);
    if (dialog) dialog.showModal();
  });
});

const dialog = document.getElementById("startModal");
const closeBtn = document.getElementById("close-modal-btn");
const startForm = document.getElementById("startForm");

closeBtn.addEventListener("click", () => {
  dialog.close();
});

startForm.addEventListener("submit", (e) => {
  e.preventDefault();
  userName = document.getElementById("username").value.trim();
  dialog.close();
  startQuiz();
});

function startQuiz() {
  document.getElementById("quiz-container").style.display = "block";
  document.getElementById("submit-btn").style.display = "inline-block";
  document.getElementById("open-modal-btn").style.display = "none";
}


submitBtn.addEventListener("click", calculateScore);
fetchData();