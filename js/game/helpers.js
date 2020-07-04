function hide(e)
{
    e.style.display = 'none';
}

function show(e)
{
    e.style.display = 'block';
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

function clearScreenAndListeners()
{
    document.removeEventListener('keydown', startGame);
    document.removeEventListener('keydown', respawn);
    hide(menu_screen);
}