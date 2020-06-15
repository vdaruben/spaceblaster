function hide(e)
{
    e.style.display = 'none';
}

function show(e)
{
    e.style.display = 'block';
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function collisionCheck(bullet, target)
{
    var hitbox = target.getBoundingClientRect();
    var hurtbox = bullet.getBoundingClientRect();

    return !(
        ((hitbox.y + hitbox.height) < (hurtbox.y)) ||
        (hitbox.y > (hurtbox.y + hurtbox.height)) ||
        ((hitbox.x + hitbox.width) < hurtbox.x) ||
        (hitbox.x > (hurtbox.x + hurtbox.width))
    );
}