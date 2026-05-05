// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selectHorn = document.getElementById('horn-select');
  const hornImage = document.querySelector('#expose img');
  const audio = document.querySelector('audio');

  const playButton = document.querySelector('button');
  const jsConfetti = new JSConfetti();

  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');

  selectHorn.addEventListener('change', function () {
    const selectedHorn = selectHorn.value;

    //check
    console.log('Selected horn:', selectedHorn);
    console.log('Image element:', hornImage);

    hornImage.src = 'assets/images/' + selectedHorn + '.svg';
    hornImage.alt = selectedHorn;

    audio.src = 'assets/audio/' + selectedHorn + '.mp3';
  });

  playButton.addEventListener('click', function () {
    //check
    console.log('Playing:', audio.src);

    audio.currentTime = 0;
    audio.play();

    if (selectHorn.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });

  volumeSlider.addEventListener('input', function () {
    
    const volume = Number(volumeSlider.value);

    audio.volume = volume / 100;
    //check
    console.log('Volume:', audio.volume);

    if (volume === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
      volumeIcon.alt = 'Volume level 0';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
      volumeIcon.alt = 'Volume level 1';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
      volumeIcon.alt = 'Volume level 2';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
      volumeIcon.alt = 'Volume level 3';
    }
  });
}