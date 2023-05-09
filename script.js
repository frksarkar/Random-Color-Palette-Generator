const container = document.querySelector('.container');
const refreshBtn = document.querySelector('.refresh-btn');
const value = {
	colorBoxQuantity: 20,
};

const colorCodeCopy = (e) => {
	// console.log(e.querySelector('.hex-value').innerText);
	const colorHexTag = e.querySelector('.hex-value');
	const colorHaxValue = e.querySelector('.hex-value').innerText;
	navigator.clipboard
		.writeText(colorHaxValue)
		.then(() => {
			colorHexTag.innerText = 'copied!';
			setTimeout(() => {
				colorHexTag.innerText = colorHaxValue;
			}, 1000);
		})
		.catch(() => {
			alert('failed to copy the color code!');
		});
};

const generateColor = () => {
	let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
	randomHex = `#${randomHex.padStart(6, '0')}`;
	return randomHex;
};

const colorPlateSet = () => {
	const color = generateColor();
	const colorBox = `<li class="color" onclick="colorCodeCopy(this)">
	<div class="rect-box" style="background-color: ${color}"></div>
	<span class="hex-value">${color.toUpperCase()}</span>
</li>`;

	return colorBox;
};

function colorTag() {
	for (let index = 0; index < value.colorBoxQuantity; index++) {
		container.insertAdjacentHTML('afterbegin', colorPlateSet());
	}
}

colorTag();

refreshBtn.addEventListener('click', colorTag);
