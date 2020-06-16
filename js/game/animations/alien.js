var alien_direction = 'down';
var blink_eye_count = 0;

var animate_alien_movement_interval = setInterval(function(){
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

var animate_tentacles_interval = setInterval(function(){
    if(alien !== null)
    {
        toggleAlienMovingTentaclesSprite();
    }
}, 200);

function toggleAlienMovingTentaclesSprite()
{
    var background_position = alien.style.backgroundPosition;
    blink_eye_count = blink_eye_count + 1;

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