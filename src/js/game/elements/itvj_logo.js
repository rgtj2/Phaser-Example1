module.exports = function (game) {

  var Logo = {
    game: game,
    platforms: null
  };

  Logo.preload = function () {
    this.game.load.image('logo', 'images/itvj2.png#grunt-cache-bust');
  };

  Logo.create = function () {
    this.sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
    this.sprite.anchor.setTo(0.5, 0.4);

  };

  Logo.update = function () {

  };

  return Logo;

};