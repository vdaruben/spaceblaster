var start_button = document.getElementById('start');
var playfield = document.getElementById('playfield');
var playfield_width = 800;
var playfield_height = 600;
var spaceship = null;

function start()
{
    hide(start_button);

    // make new spaceship object
    var spaceship_object = new spaceship_blueprint('spaceship', 'sprite/spaceships/spaceship.png');

    // create new img elemnt for ship
    var img = document.createElement('img');
    img.id = spaceship_object.id;
    img.src = spaceship_object.img;

    // set ship on screen
    playfield.appendChild(img);
    spaceship = document.getElementById('spaceship');

    // set spaceship controls
    setSpaceshipControls();
}