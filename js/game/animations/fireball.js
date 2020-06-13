setInterval(function(){
    if(alien !== null)
    {
        var offset_top = alien.offsetTop + 80;
        var offset_left = alien.offsetLeft;

        // create fireball img
        var fireball = document.createElement('img');
        fireball.id = 'fireball';
        fireball.classList.add('fireball');
        fireball.src = 'sprites/bullets/fireball.png';
        fireball.style.top = offset_top + 'px';
        fireball.style.left = offset_left + 'px';

        // set fireball on field
        playfield.appendChild(fireball);
    }
}, 2000);

setInterval(function(){
    var fireballs = document.getElementsByClassName('fireball');
    for (var i = 0; i < fireballs.length; i++) {
        var fireball = fireballs.item(i);
        var offset_left = fireball.offsetLeft - 10;
        fireball.style.left = offset_left + 'px';

    }
}, 20);