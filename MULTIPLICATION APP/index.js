const number1 = Math.ceil(Math.random() * 10);
const number2 = Math.ceil(Math.random() * 10);

const question = document.querySelector('#question');

const formElement = document.querySelector('#form');
const inputElement = document.querySelector('#input');

const scoreElement = document.querySelector('#score');

let score = JSON.parse(localStorage.getItem('score'));

if (!score) {
	score = 0;
}

scoreElement.innerText = `Score: ${score}`;

question.innerText = `What is ${number1} multiply by ${number2}?`;

const correctAnswer = number1 * number2;

formElement.addEventListener('submit', () => {
	const userAnswer = parseInt(inputElement.value);
	if (userAnswer === correctAnswer) {
		score++;
		updateLocalStorage();
	} else {
		score--;
		updateLocalStorage();
	}
});

const updateLocalStorage = () => {
	localStorage.setItem('score', JSON.stringify(score));
};
