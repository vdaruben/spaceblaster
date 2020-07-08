var playfield = document.getElementById('playfield');
var title_screen = document.getElementById('title-screen');
var spaceship = null;
var alien = null;
var alien_healthbar = document.getElementById('alien-healthbar');

window.onload = showTitleScreen();

function showTitleScreen()
{
    title_screen.classList.add('fade-in-animation');
    document.addEventListener('keydown', showMenu);
}

function startGame()
{
    playSoundEffect('sound/button-press.mp3');
    backgroundMusic.pause();
    playSoundEffect('sound/pre-play.mp3');
    hide(game_over_screen);
    clearScreenAndListeners();
    spawnSpaceship();
    spawnAlien();
    countDown();
}

function spawnSpaceship()
{
    var spaceship_object = new spaceship_blueprint('spaceship', 'sprites/spaceships/spaceship.png');
    var spaceship_span = document.createElement('span');
    spaceship_span.id = spaceship_object.id;
    spaceship_span.style.backgroundImage = "url('" + spaceship_object.sprite + "')";
    spaceship_span.style.backgroundPosition = ' 0px 0px';

    playfield.appendChild(spaceship_span);
    spaceship = document.getElementById('spaceship');

    setTimeout(function(){
        spaceship.style.animation = 'spaceship-slide-in-screen 0.5s steps(12)';
    },1000);
    spaceship.addEventListener('webkitAnimationEnd',function(e) {
        spaceship.style.animation = '';
        spaceship.style.marginLeft = '20px';
    }, false);
    shoot_disabled = false;

}

function spawnAlien()
{
    var alien_object = new monster('alien', 'sprites/monsters/alien.png')
    var alien_span = document.createElement('span');
    alien_span.id = alien_object.id;
    alien_span.style.backgroundImage = "url('" + alien_object.sprite + "')";
    alien_span.style.backgroundPosition = ' 0px 0px';

    playfield.appendChild(alien_span);
    show(alien_healthbar);
    alien = document.getElementById('alien');

    setTimeout(function(){
        alien.style.animation = 'alien-slide-in-screen 1s steps(20)';
    },2000);
    alien.addEventListener('webkitAnimationEnd',function(e) {
        alien.style.animation = '';
        alien.style.right = '20px';
    }, false);
}

function countDown()
{
    setTimeout(function(){
        setSpaceshipControls();
        setAlienMovementInterval();
        setAlienAutoShootInterval();
        shoot_disabled = false;
        playMenuSong('sound/playing.mp3');
    },3750);
}

function endGame()
{
    clearInterval(animate_tentacles_interval);
    animateAlienExplodes();
    clearScreenAndListeners();
    animateSpaceshipFlyAway();
    show(game_over_screen);
    game_over_screen.addEventListener("animationend", function() {
        game_over_screen.style.height = '600px';
        document.addEventListener('keydown', function(){
            location.reload();
        });
    }, false);
}