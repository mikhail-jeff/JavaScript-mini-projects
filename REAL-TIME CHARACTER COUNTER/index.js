const textarea = document.querySelector('#textarea');
const totalCounter = document.querySelector('#total-counter');

const remaining = document.querySelector('#remaining-counter');

textarea.addEventListener('keyup', () => {
	updateCounter();
});

const updateCounter = () => {
	totalCounter.innerText = textarea.value.length;

	remaining.innerText = textarea.getAttribute('maxLength') - textarea.value.length;
};

updateCounter();
