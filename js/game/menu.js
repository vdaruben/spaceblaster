var menu_screen = document.getElementById('menu-screen');
var game_over_screen = document.getElementById('game-over-screen');

function showMenu()
{
    playSoundEffect('sound/button-press.mp3');
    playMenuSong('sound/game.mp3');
    hide(title_screen);
    show(menu_screen);
    document.removeEventListener('keydown',showMenu);
    document.addEventListener('keydown', navigateMenu, false);
}

function navigateMenu(e)
{
    if(e.code === 'ArrowUp' || e.code === 'ArrowDown')
    {
        switchMenuSelection();
    }
    if(e.code === 'Space' || e.code === 'Enter')
    {
        checkMenuSelection();
    }
}

function switchMenuSelection()
{
    playSoundEffect('sound/button-press.mp3');
    var menu_items = document.getElementsByClassName('menu-item');
    for(i = 0; i < menu_items.length; i++)
    {
        if(menu_items[i].classList.contains('menu-selected'))
        {
            menu_items[i].classList.remove('menu-selected');
        }
        else
        {
            menu_items[i].classList.add('menu-selected');
        }
    }
}

function checkMenuSelection()
{
    playSoundEffect('sound/button-press.mp3');
    document.removeEventListener('keydown',navigateMenu);
    var selected_menu = document.getElementsByClassName('menu-selected')[0].id;
    switch(selected_menu) {
        case 'menu-start':
            startGame();
            break;
        case 'menu-controls':
            showControls();
            break;
    }
}

function showControls()
{
    hide(document.getElementById('menu-start'));
    hide(document.getElementById('menu-controls'));
    show(document.getElementById('controls'));
    document.addEventListener('keydown', startGame);
}

function gameOver()
{
    shoot_disabled = true;
    clearInterval(alien_auto_shoot);
    animateSpaceshipExplodes();
    show(game_over_screen);
    game_over_screen.addEventListener("animationend", function() {
        game_over_screen.style.height = '600px';
        document.addEventListener('keydown', respawn);
    }, false);
}

function respawn()
{
    playSoundEffect('sound/button-press.mp3');
    spaceship = null;
    hide(game_over_screen);
    clearScreenAndListeners();
    spawnSpaceship();
    spaceship_state = 'flying';
    resetAlienHealth();
    setTimeout(function(){
        setAlienAutoShootInterval();
    },1000);
}