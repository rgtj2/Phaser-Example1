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

    var ledge = this.platforms.create(475,200, 'ground');
    ledge.body.immovable = true;
    ledge = this.platforms.create(0,200,'ground');
    ledge.body.immovable = true;
    ledge = this.platforms.create(200,430,'ground');
    ledge.body.immovable = true;
    ledge.scale.setTo(.75,.5);
    ledge = this.platforms.create(300,90,'ground');
    ledge.body.immovable = true;
    ledge.scale.setTo(.5,.5);
    ledge = this.platforms.create(80,325,'ground');
    ledge.body.immovable = true;
    ledge.scale.setTo(.15,.5);
    ledge = this.platforms.create(140,140,'ground');
    ledge.body.immovable = true;
    ledge.scale.setTo(.15,.3);
    ledge.angle = -15;


  };

  Platform.update = function () {

  };

  return Platform;

};