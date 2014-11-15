module.exports = function (game) {

  var Mario = {
    game: game,
    map: null,
    layer: null
  };

  Mario.preload = function () {
    this.game.load.tilemap('mario', null, marioTiles, Phaser.Tilemap.TILED_JSON);
    this.game.load.image('marioTiles', 'images/super_mario.png#grunt-cache-bust')

  };

  Mario.create = function () {
    this.map = this.game.add.tilemap('mario');
    this.map.addTilesetImage('Mario', 'marioTiles');

    //  14 = ? block
    // map.setCollisionBetween(14, 15);

    this.map.setCollisionBetween(15, 16);
    this.map.setCollisionBetween(20, 25);
    this.map.setCollisionBetween(27, 29);
    this.map.setCollision(40);
    

    this.layer = this.map.createLayer('marioGround');
    this.layer.resizeWorld();

  };

  Mario.update = function () {

  };

  return Mario;

};