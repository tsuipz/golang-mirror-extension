var btnTry = document.getElementById('try-btn');
var btnCopy = document.getElementById('copy-btn');

function Try() {
	var text = document.getElementById('textarea-copy');
	var golangArray = text.value.split('\n');
	var finalArray = [];
	var result = '';

	golangArray.forEach(function (golang) {
		var finalSentence = golang;
		if (finalSentence.includes(':= "')) {
			var sentence = finalSentence.split(' "');
			var newSentence = sentence[0] + ' "" }}';
			var array = newSentence.trim().split(' ');
			array[3] = '$.' + array[1].slice(1);
			finalSentence = array.join(' ');
		}
		finalArray.push(finalSentence);
	});

	result = finalArray.join('\n');
	text.value = result;
}

function Copy() {
	var copyText = document.getElementById('textarea-copy');
	copyText.select();
	navigator.clipboard.writeText(copyText.value).then(
		function () {
			alert('Copied the text');
		},
		function (err) {
			console.error('Async: Could not copy text: ', err);
		}
	);
}

btnTry.addEventListener('click', Try);
btnCopy.addEventListener('click', Copy);
