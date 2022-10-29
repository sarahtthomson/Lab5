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
  audioLevel.addEventListener('input', (event) => {

  });
}