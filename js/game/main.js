var start_button = document.getElementById('start');
var playfield = document.getElementById('playfield');
var playfield_width = 800;
var playfield_height = 600;
var spaceship = null;
var alien = null;

function start()
{
    hide(start_button);

    // make new spaceship object
    var spaceship_object = new spaceship_blueprint('spaceship', 'sprites/spaceships/spaceship.png');
    var spaceship_span = document.createElement('span');
    spaceship_span.id = spaceship_object.id;
    spaceship_span.style.backgroundImage = "url('" + spaceship_object.img + "')";
    spaceship_span.style.backgroundPosition = ' 0px 0px';

    // spanw spaceship
    playfield.appendChild(spaceship_span);
    spaceship = document.getElementById('spaceship');

    // set spaceship controls
    setSpaceshipControls();

    // create alien element
    var alien_object = new monster('alien', 'sprites/monsters/alien.png')
    var alien_span = document.createElement('span');
    alien_span.id = alien_object.id;
    alien_span.style.backgroundImage = "url('" + alien_object.img + "')";
    alien_span.style.backgroundPosition = ' 0px 0px';

    // set alien on screen
    playfield.appendChild(alien_span);
    alien = document.getElementById('alien');
}