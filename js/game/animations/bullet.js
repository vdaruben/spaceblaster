setInterval(function(){
    var bullets = document.getElementsByClassName('bullet');
    for (var i = 0; i < bullets.length; i++) {
        var bullet = bullets.item(i);
        var offset_left = bullet.offsetLeft;
        if(offset_left < 800)
        {
            var collision = collisionCheck(bullet, alien);
            if(collision === true) console.log('green bullet hits');
            bullet.style.left = offset_left + 10 + 'px';
        }
        else
        {
            bullet.remove();
        }
    }
}, 20);