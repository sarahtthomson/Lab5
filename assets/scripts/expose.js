// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selectElement = document.querySelector('#horn-select');

  selectElement.addEventListener('change', (event) => {
    const image = document.querySelector("img");
    console.log(`${event.target.value}`)
    image.src = `assets/images/${event.target.value}.svg`;

    const audio = document.querySelector(".hidden");
    console.log(`${event.target.value}`)
    audio.src = `assets/audio/${event.target.value}.mp3`;
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
  
}