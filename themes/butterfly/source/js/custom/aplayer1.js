//音乐播放
var rootlex = {
    musicToggle: function(){
        if (rootlex_musicPlaying) {
            document.querySelector("#nav-music").classList.remove("playing");
            rootlex_musicPlaying = false;
            document.querySelector('meting-js').aplayer.pause();
        }else {
            document.querySelector("#nav-music").classList.add("playing");
            rootlex_musicPlaying = true;
            document.querySelector('meting-js').aplayer.play();
        }
    },
}