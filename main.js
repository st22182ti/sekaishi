const markList = document.getElementsByTagName("mark");
const show = () => {
	checkbox = document.getElementById("show");
	for (let elm of markList) {
		if (checkbox.checked) {
			elm.classList.add("mark-show");
		} else {
			elm.classList.remove("mark-show");
		}
	}
};

for (let elm of markList) {
	elm.addEventListener("click", () => {
		elm.classList.toggle("mark-show");
	});
}

const print_noanswer = document.getElementById("print-noanswer");
print_noanswer.innerText = "解答無しで印刷する";
print_noanswer.addEventListener("click", () => {
	for (let elm of markList) {
		elm.classList.remove("mark-show");
	}
	window.print();
});

const print_answer = document.getElementById("print-answer");
print_answer.innerText = "解答有りで印刷する";
print_answer.addEventListener("click", () => {
	for (let elm of markList) {
		elm.classList.add("mark-show");
	}
	window.print();
});

window.onload = () => {
	history.replaceState(null, "", "index.html?openExternalBrowser=1");
};

// insert head links (favicon, css)
const head = document.getElementsByTagName("head")[0];

const favicon_link = document.createElement("link");
favicon_link.rel = "shortcut icon";
favicon_link.href = "./favicon.ico";
favicon_link.type = "image/x-icon";
head.appendChild(favicon_link);

const css_link = document.createElement("link");
css_link.rel = "stylesheet";
css_link.type = "text/css";
css_link.href = "main.css";
head.appendChild(css_link);

const gfonts_pre1_link = document.createElement("link");
gfonts_pre1_link.rel = "preconnect";
gfonts_pre1_link.href = "https://fonts.googleapis.com";
head.appendChild(gfonts_pre1_link);

const gfonts_pre2_link = document.createElement("link");
gfonts_pre2_link.rel = "preconnect";
gfonts_pre2_link.href = "https://fonts.gstatic.com";
gfonts_pre2_link.crossorigin = "anonymous";
head.appendChild(gfonts_pre2_link);

const gfonts_link = document.createElement("link");
gfonts_link.href =
	"https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+New:wght@400;500;700;900&display=swap";
gfonts_link.rel = "stylesheet";
head.appendChild(gfonts_link);

/*
window.onload = () => {
head.innerHTML += '<link rel="preconnect" href="https://fonts.googleapis.com">'
head.innerHTML += '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
head.innerHTML += '<link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap" rel="stylesheet"></link>'
}
*/

/*

window.speechSynthesis.onvoiceschanged = () => {
    this.voices = window.speechSynthesis.getVoices();
  };

  
document.getElementById("play").addEventListener("click", () => {
    if (window.speechSynthesis) {

        var text = document.getElementsByClassName("markdown-preview")[0].innerText;

        text = text.replace("(", " ").replace(")", " ");

        const uttr = new SpeechSynthesisUtterance("こんにちは");

        console.log(text);

        uttr.lang = "ja-JP";
        uttr.rate = 1.0;
        uttr.pitch = 1.0;
        uttr.volume = 1.0;
        
        uttr.text = text;
        const voiceList = speechSynthesis.getVoices();
        console.log(voiceList)

        voiceList.forEach(elm => {
            if(elm.lang.startsWith('ja')) {
                uttr.voice = elm;
            }
        });

        console.log(uttr.voice)

        window.speechSynthesis.speak(uttr);
        speechSynthesis.speak(uttr);
    } else {
        alert("ブラウザが音声合成非対応です");
    }
});
*/

