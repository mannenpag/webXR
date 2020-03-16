AFRAME.registerComponent('audiohandler', {
    scheme:{
        src: {type: "string", default: ""},
    },

    init: function() {
        let data = this.data;
        let playing = false;

        console.log();
        let audio = document.getElementById("'" + data.src + "'");

        this.el.addEventListener('click', () => {
        if (!playing) {
            audio.play();
        } else {
            audio.pause();
            audio.currentTime = 0;
        }
        playing = !playing;
      });
    }
  })
