window.addEventListener("touchstart",ontouchstart);
window.addEventListener("mousedown",ontouchstart);


var recog = new webkitSpeechRecognition();



function ontouchstart(){
	recog.start();



}

function onEnd(){
	recog.stop();
}

recog.onend = onEnd();

recog.onsoundend = onEnd();

recog.onresult = function (e){
	document.getElementById("text").innerHTML = e.results[0][0].transcript + ": " + e.results[0][0].confidence;
}