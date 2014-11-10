module.exports = function(game) {

  var preloader = {};

  preloader.preload = function () {
    
    player = game.characters.dude;
    player.preload();

    platformLevel = game.levels.platform;
    platformLevel.preload();

    stars = game.elements.stars;
    stars.preload();

    itvjLogo = game.elements.itvjLogo;
    itvjLogo.preload();

    HUD = game.indicators.hud;

    Magdalene = game.music.magdalene;
    Magdalene.preload();

  };

  preloader.create = function () {
    game.state.start('game');
  };

  return preloader;
};
