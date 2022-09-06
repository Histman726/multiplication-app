const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

const formElement = document.getElementById("form");
const inputElement = document.getElementById("input");
const scoreElement = document.getElementById("score");
const questionElement = document.getElementById("question");

questionElement.innerText = `What is ${num1} multiply by ${num2}`;
let correctAnswer = num1 * num2,
  score = JSON.parse(localStorage.getItem("score"));

if (!score) score = 0;

scoreElement.innerText = "score: " + score;

formElement.addEventListener("submit", () => {
  const userAnswer = parseInt(inputElement.value);
  if (userAnswer === correctAnswer) score++;
  else score--;
  updateLocalStorage(score);
});

function updateLocalStorage(score) {
  localStorage.setItem("score", JSON.stringify(score));
}
