const speak = () => {
  const msg = new SpeechSynthesisUtterance(
    document.getElementById("message").value
  );
  const voices = window.speechSynthesis.getVoices();
  msg.voice = voices[5];
  window.speechSynthesis.speak(msg);
};
