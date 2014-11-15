module.exports = function (game) {

  var Platform = {
    game: game,
    platforms: null
  };

  Platform.preload = function () {
    this.game.load.image('ground', 'images/ground.png#grunt-cache-bust');    
  };

  Platform.create = function () {

    this.platforms = game.add.group();
    this.platforms.enableBody = true;

    var ground = this.platforms.create(0, game.world.height - 64, 'ground');
    ground.scale.setTo(2,2);
    ground.body.immovable = true;

    var ledge = this.platforms.create(500,200, 'ground');
    ledge.body.immovable = true;
    ledge = this.platforms.create(-150,100,'ground');
    ledge.body.immovable = true;

  };

  Platform.update = function () {

  };

  return Platform;

};