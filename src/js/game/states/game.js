module.exports = function(game) {

  var gameState = {};

  gameState.create = function () {

    platformLevel.create();
    //desertLevel.create();
    //propellerCar.create();
    //itvjLogo.create();
    game.stage.backgroundColor = '#ffffff';
    HUD.create();

    //player.create('platform');
    monster.create();
    //stars.create();
    squirrel.create();

  };

  gameState.update = function () {
    //propellerCar.update();
    //player.update('platform');
    monster.update();
    //stars.update();
    squirrel.update();

    //if (HUD.score == 1200) { game.state.start('level1'); }

  }

  gameState.render = function () {
    //game.debug.text('dude-velocity: x=' + player.sprite.body.velocity.x + 'y = ' + player.sprite.body.velocity.y, 32, 200)
    //game.debug.text('Tile X: ' + desertLevel.layer.getTileX(player.x), 32, 48, 'rgb(0,0,0)');
    //game.debug.text('Tile Y: ' + desertLevel.layer.getTileY(player.y), 32, 64, 'rgb(0,0,0)');
    //game.debug.text('Updating: ' + updating, 32, 64, 'rgb(0,0,0)');
  }

  return gameState;
};
