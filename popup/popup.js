const btnTry = document.getElementById('try-btn');
const btnEmpty = document.getElementById('empty-btn');
const btnCopy = document.getElementById('copy-btn');

const tryHandler = (makeEmpty = false) => {
	const text = document.getElementById('textarea-copy');
	text.value = text.value
		.split('\n')
		.map((element) => {
			let finalSentence = element;
			if (finalSentence.includes(':= "')) {
				const sentence = finalSentence.split(' "');
				const array = `${sentence[0]} "" }}`.trim().split(' ');
				makeEmpty === true ? true : (array[array.indexOf('""')] = `$.${array[1].slice(1)}`);
				finalSentence = array.join(' ');
			}
			return finalSentence;
		})
		.join('\n');
};

const copyHandler = () => {
	const copyText = document.getElementById('textarea-copy');
	navigator.clipboard.writeText(copyText.value).then(
		() => alert('Copied the text'),
		(err) => alert('Could not copy', err)
	);
};

btnTry.addEventListener('click', tryHandler);
btnEmpty.addEventListener('click', tryHandler.bind(null, true));
btnCopy.addEventListener('click', copyHandler);
