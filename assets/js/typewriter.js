var i = 0;
var phrases = ['Software Developer!', 'Full Stack Developer!', 'Front End Developer!'];
var speed = 100; /* The speed/duration of the effect in milliseconds */
var pause = 500; /* The pause between phrases */

typeWriter(0);

function typeWriter(phraseIndex) {
  if (phraseIndex < phrases.length) {
    var txt = phrases[phraseIndex];
    i = 0;
    document.getElementById("demo").innerHTML = '';
    typeWriterHelper(txt, phraseIndex);
  } else {
    typeWriter(0); // Restart the loop
  }
}

function typeWriterHelper(txt, phraseIndex) {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(() => typeWriterHelper(txt, phraseIndex), speed);
  } else {
    setTimeout(() => typeWriter(phraseIndex + 1), pause);
  }
}
