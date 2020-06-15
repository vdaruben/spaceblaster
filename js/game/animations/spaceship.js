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
            clearInterval(spaceship_animation_interval);
            animateSpaceshipExplodes();
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
    spaceship.style.backgroundPosition = "-300px 0px";
    setTimeout(function(){
        spaceship.style.backgroundPosition = "-400px 0px";
    }, 100);
    setTimeout(function(){
        spaceship.style.backgroundPosition = "-500px 0px";
    }, 200);
    setTimeout(function(){
        spaceship.style.backgroundPosition = "-600px 0px";
    }, 300);
    setTimeout(function(){
        spaceship.style.backgroundPosition = "-700px 0px";
    }, 400);
    setTimeout(function(){
        spaceship.remove();
    }, 500);
}