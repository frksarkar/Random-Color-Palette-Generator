const refreshBtn = document.querySelector('.refresh-btn');

const generateColor = () => {
	let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
	randomHex = `#${randomHex.padStart(6, '0')}`;
	console.log(randomHex);
};

refreshBtn.addEventListener('click', generateColor);
