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

    // create new img elemnt for ship
    var img = document.createElement('img');
    img.id = spaceship_object.id;
    img.src = spaceship_object.img;

    // set ship on screen
    playfield.appendChild(img);
    spaceship = document.getElementById('spaceship');

    // set spaceship controls
    setSpaceshipControls();

    // create alien element
    var alien_object = new monster('alien', 'sprites/monsters/alien.png')
    var img2 = document.createElement('img');
    img2.id = alien_object.id;
    img2.src = alien_object.img;

    // set alien on screen
    playfield.appendChild(img2);
    alien = document.getElementById('alien');
}