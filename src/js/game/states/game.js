module.exports = function(game) {

  var gameState = {};
  // audio
  var music;


  gameState.create = function () {

    platformLevel.create();

    itvjLogo.create();

    HUD.create();

    Magdalene.create();

    player.create();

    stars.create();

  };

  gameState.update = function () {

    player.update();

    stars.update();

  }

  gameState.render = function () {
    //game.debug.text('dude-velocity: x=' + player.sprite.body.velocity.x + 'y = ' + player.sprite.body.velocity.y, 32, 200)
  }

  return gameState;
};
