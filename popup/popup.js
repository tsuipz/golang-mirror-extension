const btnTry = document.getElementById("try-btn");
const btnEmpty = document.getElementById("empty-btn");
const btnCopy = document.getElementById("copy-btn");

const tryHandler = (makeEmpty = false) => {
	const text = document.getElementById("textarea-copy");
	text.value = text.value
		.split("\n")
		.map((element) => {
			let finalSentence = element;
			if (makeEmpty === true) {
				const sentence = finalSentence.split(" ").filter((word) => word !== "");
				return [sentence[0], sentence[1], sentence[2], '"" }}'].join(" ");
			}
			if (finalSentence.includes(':= "')) {
				const sentence = finalSentence.split(' "');
				const sentArr = `${sentence[0]} "" }}`.trim().split(" ");
				sentArr[sentArr.indexOf('""')] = `$.${sentArr[1].slice(1)}`;
				finalSentence = sentArr.join(" ");
			}
			return finalSentence;
		})
		.join("\n");
};

const copyHandler = () => {
	const copyText = document.getElementById("textarea-copy");
	navigator.clipboard.writeText(copyText.value).then(
		() => alert("Copied the text"),
		(err) => alert("Could not copy", err)
	);
};

btnTry.addEventListener("click", tryHandler);
btnEmpty.addEventListener("click", tryHandler.bind(null, true));
btnCopy.addEventListener("click", copyHandler);
