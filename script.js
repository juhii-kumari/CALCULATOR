 
function toggleShadow(boxId, shadowId) {
    var buttonShadow = document.getElementById(shadowId);
    buttonShadow.classList.add('shadow1');
    buttonShadow.classList.remove('shadow2');
    setTimeout(() => {
        buttonShadow.classList.add('shadow2');
    }, 300);
}

 
for (let i = 1; i <= 20; i++) {
    document.getElementById(`singlebox${i}`).addEventListener('click', function() {
        toggleShadow(`singlebox${i}`, `btnshadow${i}`);
    });
}

//audio play when i will click

function togglePlay(video) {
    var audio = document.getElementsByTagName("audio")[0];
    if (audio) {
      if (audio.paused) {
          audio.play();
          document.getElementById("button").src = "/audio.mp4";
      } else {
          audio.pause();
          document.getElementById("button").src = "audio.mp4";
      }
    }
  }


 
 