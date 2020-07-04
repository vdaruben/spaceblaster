var alien_direction = 'down';
var blink_eye_count = 0;
var alien_hits = 0;
var animate_alien_movement_interval;

function setAlienMovementInterval()
{
    animate_alien_movement_interval = setInterval(function(){
        if(alien !== null)
        {
            var offset_top = alien.offsetTop;
            var new_offset_top;

            if(offset_top <= 40)
            {
                alien_direction = 'down';
            }
            else if(offset_top >= 320)
            {
                alien_direction = 'up';
            }

            if(alien_direction === 'down')
            {
                new_offset_top = offset_top + 10;

            }
            else if(alien_direction === 'up')
            {
                new_offset_top = offset_top - 10;
            }

            alien.style.top = new_offset_top + 'px';
        }
    }, 80);
}

var animate_tentacles_interval = setInterval(function(){
    if(alien !== null)
    {
        toggleAlienMovingTentaclesSprite();
    }
}, 200);

function toggleAlienMovingTentaclesSprite()
{
    var background_position = alien.style.backgroundPosition;
    blink_eye_count++;

    if(background_position === "0px 0px" || background_position === "-420px 0px")
    {
        // position 2
        alien.style.backgroundPosition = "-210px 0px";
    }
    else if(background_position === "-210px 0px" && blink_eye_count < 15)
    {
        // position 1 eye open
        alien.style.backgroundPosition = "0px 0px";
    }
    else
    {
        // position 1 eye closes
        alien.style.backgroundPosition = "-420px 0px";
        blink_eye_count = 0;
    }
}

function animateAlienOnHitWhiteFlicker()
{
    alien.style.filter = "brightness(0) invert(1)";
    setTimeout(function(){
        alien.style.filter = "none";
    }, 100);
}

function resetAlienHealth()
{
    alien_hits = 0;
    var alien_health_progression = document.getElementById('alien-health-progression');
    alien_health_progression.style.width =  alien_hits + 'px';
}

function lowerAlienHealth()
{
    alien_hits++;
    if(alien_hits % 10 === 0)
    {
        var alien_health_progression = document.getElementById('alien-health-progression');
        alien_health_progression.style.width =  alien_hits + 'px';
    }
    if(alien_hits === 400)
    {
        endGame();
    }
}

function animateAlienExplodes()
{
    clearInterval(alien_auto_shoot);
    alien.style.animation = 'alien-explodes 2s steps(12)';
    alien.addEventListener('webkitAnimationEnd',function(e) {
        alien.remove();
        endGame();
    }, false);
}