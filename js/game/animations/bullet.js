setInterval(function(){
    var bullets = document.getElementsByClassName('bullet');
    for (var i = 0; i < bullets.length; i++) {
        var bullet = bullets.item(i);
        var offset_left = bullet.offsetLeft + 10;
        bullet.style.left = offset_left + 'px';

    }
}, 20);