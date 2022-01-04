var btnTry = document.getElementById('try-btn');
var btnEmpty = document.getElementById('empty-btn');
var btnCopy = document.getElementById('copy-btn');

function Try(makeEmpty = false) {
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
			if (makeEmpty === true) {
				array[3] = '""';
			} else {
				array[3] = '$.' + array[1].slice(1);
			}
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
btnEmpty.addEventListener('click', Try.bind(null, true));
btnCopy.addEventListener('click', Copy);
