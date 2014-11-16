module.exports = function (game) {

  var Desert = {
    game: game,
    map: null,
    layer: null
  };

  Desert.preload = function () {
    this.game.load.tilemap('desert', null, desertTiles, Phaser.Tilemap.TILED_JSON);
    this.game.load.image('tiles', 'images/desert_spacing.png#grunt-cache-bust')

  };

  Desert.create = function () {
    this.map = this.game.add.tilemap('desert');
    this.map.addTilesetImage('Desert', 'tiles');

    this.layer = this.map.createLayer('Ground');
    this.layer.resizeWorld();

    setTimeout(function(){game.state.start('level2');}, 15500);

  };

  Desert.update = function () {

  };

  return Desert;

};