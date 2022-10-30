// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var synth = window.speechSynthesis;
  const voiceOption = document.querySelector('#voice-select');
  let voices = [];

  synth.addEventListener('voiceschanged', () => {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceOption.appendChild(option);
    }
  });

  const talk = document.querySelector('button');

  talk.addEventListener('click', (event)=> {
    const text = new SpeechSynthesisUtterance(document.querySelector('textarea').value);
    text.onend = function(event) {
      image.src = 'assets/images/smiling.png';
    }
    var image = document.querySelector('img');

    const selectedOption = voiceOption.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        text.voice = voices[i];
        break;
      }
    }

    console.log(text.voice);

    synth.speak(text);
    image.src = 'assets/images/smiling-open.png';
  });
}

