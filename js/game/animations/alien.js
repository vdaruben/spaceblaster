var alien_direction = 'down';

setInterval(function(){
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
}, 50);