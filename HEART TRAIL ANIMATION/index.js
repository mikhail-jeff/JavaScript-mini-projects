const body = document.querySelector('body');

body.addEventListener('mousemove', (e) => {
	const x = e.offsetX;
	const y = e.offsetY;
	const spanElement = document.createElement('span');

	spanElement.style.left = x + 'px';
	spanElement.style.top = y + 'px';

	const heartSize = Math.random() * 80;
	spanElement.style.width = heartSize + 'px';
	spanElement.style.height = heartSize + 'px';

	body.appendChild(spanElement);

	setTimeout(() => {
		spanElement.remove();
	}, 3000);
});
