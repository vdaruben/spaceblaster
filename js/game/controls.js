var moving_down = false;
var moving_up = false;
var shoot_disabled = false;

setInterval(function(){
    move();
}, 1000/24);

function move()
{
    if(moving_down === true)
    {
        moveDown();
    }
    if(moving_up === true)
    {
        moveUp();
    }
}

function setSpaceshipControls()
{
    document.addEventListener('keydown', function(event){
        if(event.code === 'ArrowUp')
        {
            moving_up = true;
        }
        if(event.code === 'ArrowDown')
        {
            moving_down = true;
        }
        if(event.code === 'Space' && spaceship_state === 'flying' && shoot_disabled === false)
        {
            if (event.repeat) { return }
            shoot();
        }
    }, false);

    document.addEventListener('keyup', function(event){
        if(event.code === 'ArrowUp')
        {
            moving_up = false;
        }
        if(event.code === 'ArrowDown')
        {
            moving_down = false;
        }
    }, false);
}

function moveUp()
{
    var offset_top = spaceship.offsetTop;
    if(offset_top >= -30)
    {
        spaceship.style.top = offset_top - 10 + 'px';
    }
}

function moveDown()
{
    var offset_top = spaceship.offsetTop;
    if(offset_top <= 520)
    {
        spaceship.style.top = offset_top + 10 + 'px';
    }
}

function shoot()
{
    playSoundEffect('sound/shoot.mp3');
    // create bullet img
    var bullet = document.createElement('img');
    var offset_top = spaceship.offsetTop + 50;
    var offset_left = spaceship.offsetLeft;
    bullet.style.top = offset_top + 'px';
    bullet.style.left = offset_left + 100 + 'px';
    bullet.classList.add('bullet');
    bullet.src = 'sprites/bullets/green_bullet.png';

    // spanw on field
    playfield.appendChild(bullet);
}