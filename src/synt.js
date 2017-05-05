var ss = window.speechSynthesis;

function onGetVoices(){
	var voices = ss.getVoices();
	var p = document.getElementById("voci");
	for (var i =0;i<voices.length;i++){
			p.innerHTML += voices[i].name+ ":" + voices[i].lang + "<br>";
	}
}

function talk(){
	var texttotalk = document.getElementById("text").value;
	//console.log(text);
	var utterance = new SpeechSynthesisUtterance();
	utterance.text= texttotalk;
	ss.speak(utterance);
}