var moving_down = false;
var moving_up = false;

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
        if(event.code === 'Space')
        {
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
    if(offset_top >= 20)
    {
        spaceship.style.top = offset_top - 10 + 'px';
    }
}

function moveDown()
{
    var offset_top = spaceship.offsetTop;
    if(offset_top <= 580)
    {
        spaceship.style.top = offset_top + 10 + 'px';
    }
}

function shoot()
{
    // create bullet img
    var bullet = document.createElement('img');
    bullet.classList.add('bullet');
    bullet.src = 'sprites/bullets/green_bullet.png';

    // spanw on field
    playfield.appendChild(bullet);

    // animate bullet
}