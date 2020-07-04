var spaceship_state = 'flying';

var spaceship_animation_interval = setInterval(function(){
    if(spaceship !== null)
    {
        if(spaceship_state === 'flying')
        {
            toggleFlyingSprite();
        }
        if(spaceship_state === 'hit')
        {
            gameOver();
        }
    }
}, 200);

function toggleFlyingSprite()
{
    var background_position = spaceship.style.backgroundPosition;

    if(background_position === "0px 0px")
    {
        spaceship.style.backgroundPosition = "-100px 0px";
    }
    else
    {
        spaceship.style.backgroundPosition = "0px 0px";
    }
}

function animateSpaceshipExplodes()
{
    spaceship.style.animation = 'spaceship-explodes 0.5s steps(5)';
    spaceship.addEventListener('webkitAnimationEnd',function(e) {
        spaceship.style.animation = '';
        spaceship.remove();
    }, false);
}

function animateSpaceshipFlyAway()
{
    shoot_disabled = true;
    spaceship.style.animation = 'spaceship-fly-away 1s ease-in';
    spaceship.addEventListener('webkitAnimationEnd',function(e) {
        spaceship.remove();
    }, false);
}