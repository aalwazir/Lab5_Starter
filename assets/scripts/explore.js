// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const faceImage = document.querySelector('#explore img');
  const textArea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('button');

  const synth = window.speechSynthesis;
  let voices = [];

  function populateVoices() {
    voices = synth.getVoices();

    voiceSelect.innerHTML = '<option value="select" disabled selected>Select Voice:</option>';

    voices.forEach(function (voice, index) {
      const option = document.createElement('option');

      option.value = index;
      option.textContent = voice.name + ' (' + voice.lang + ')';

      voiceSelect.appendChild(option);
    });
  }

  populateVoices();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  talkButton.addEventListener('click', function () {
    const text = textArea.value;

    if (text === '') {
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);

    const selectedVoiceIndex = voiceSelect.value;

    if (selectedVoiceIndex !== 'select') {
      utterance.voice = voices[selectedVoiceIndex];
    }

    utterance.onstart = function () {
      faceImage.src = 'assets/images/smiling-open.png';
      faceImage.alt = 'Open mouthed smiling face';
    };

    utterance.onend = function () {
      faceImage.src = 'assets/images/smiling.png';
      faceImage.alt = 'Smiling face';
    };

    utterance.onerror = function () {
      faceImage.src = 'assets/images/smiling.png';
      faceImage.alt = 'Smiling face';
    };

    synth.cancel();
    synth.speak(utterance);
  });
}