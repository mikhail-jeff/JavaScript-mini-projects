const buttonElement = document.querySelector('.btn');

buttonElement.addEventListener('mouseover', (e) => {
	const x = e.pageX - buttonElement.offsetLeft;
	const y = e.pageY - buttonElement.offsetTop;

	buttonElement.style.setProperty('--xPos', x + 'px');
	buttonElement.style.setProperty('--yPos', y + 'px');
});
