// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selectElement = document.querySelector('#horn-select');
  var partyHorn = 0;

  selectElement.addEventListener('change', (event) => {
    const image = document.querySelector("img");
    console.log(`${event.target.value}`)
    image.src = `assets/images/${event.target.value}.svg`;

    const audio = document.querySelector(".hidden");
    console.log(`${event.target.value}`)
    audio.src = `assets/audio/${event.target.value}.mp3`;

    if(event.target.value == 'party-horn') {
      partyHorn = 1;
    }
    else {
      partyHorn = 0;
    }
  });
  
  const audioLevel = document.querySelector('#volume');
  
  audioLevel.addEventListener('input', updateVolume);

  function updateVolume(e) {
    console.log(e.target.value);

    const audio = document.querySelector(".hidden");
    audio.volume = e.target.value/100;
    const audioImg = document.querySelector('[id=volume-controls] img');

    if(e.target.value == 0) {
      audioImg.src = 'assets/icons/volume-level-0.svg';
    }

    else if(e.target.value < 33) {
      audioImg.src = 'assets/icons/volume-level-1.svg';
    }

    else if(e.target.value < 67) {
      audioImg.src = 'assets/icons/volume-level-2.svg';
    }

    else {
      audioImg.src = 'assets/icons/volume-level-3.svg';
    }
  }

  const playSound = document.querySelector('button');
  const audio = document.querySelector(".hidden");
  const image = document.querySelector("img");
  const jsConfetti = new JSConfetti();

  playSound.addEventListener('click', (event)=> {
    audio.play();

    console.log(image.src);

    if(partyHorn == 1) {
      console.log('here');
      jsConfetti.addConfetti();
    }
  });
  
}