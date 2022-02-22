const bd = document.getElementsByTagName('body')[0];

document.getElementById('night').addEventListenner('click', () => {
	bd.style.backgroundColor = 'black';
})

but.onclick = function() {
  document.body.classList.toggle('dark-mode');
}

function gimn() {
        var audio = document.getElementById("audio");
        audio.paused ? audio.play() : audio.pause();
      }