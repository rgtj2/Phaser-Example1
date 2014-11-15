module.exports = function(game) {

  var gameState = {};

  gameState.create = function () {

    platformLevel.create();

    itvjLogo.create();

    HUD.create();

    player.create('platform');

    stars.create();

  };

  gameState.update = function () {

    player.update('platform');

    stars.update();

    if (HUD.score == 200) { game.state.start('level1'); }

  }

  gameState.render = function () {
    //game.debug.text('dude-velocity: x=' + player.sprite.body.velocity.x + 'y = ' + player.sprite.body.velocity.y, 32, 200)
    //game.debug.text('Tile X: ' + desertLevel.layer.getTileX(player.x), 32, 48, 'rgb(0,0,0)');
    //game.debug.text('Tile Y: ' + desertLevel.layer.getTileY(player.y), 32, 64, 'rgb(0,0,0)');
    //game.debug.text('Updating: ' + updating, 32, 64, 'rgb(0,0,0)');
  }

  return gameState;
};
