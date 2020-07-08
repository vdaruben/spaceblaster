var backgroundMusic = null;

function playMenuSong(audio_file)
{
    backgroundMusic = document.createElement("audio");
    backgroundMusic.src = audio_file;
    backgroundMusic.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    backgroundMusic.play();
}

function playSoundEffect(audio_file)
{
    var audio = document.createElement("audio");
    audio.src = audio_file;
    audio.addEventListener("ended", function () {
        this.remove();
    }, false);
    audio.play();
}