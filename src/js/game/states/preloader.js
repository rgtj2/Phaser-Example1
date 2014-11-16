module.exports = function(game) {

  var preloader = {};

  preloader.preload = function () {
    
    //player = game.characters.dude;
    //player.preload();

    monster = game.characters.monster;
    monster.preload();

    platformLevel = game.maps.platform;
    platformLevel.preload();

    //desertTiles = game.maps.desertTiles;
    //desertLevel = game.maps.desert;
    //desertLevel.preload();

    //propellerCar = game.characters.propellerCar;
    //propellerCar.preload();

    //marioTiles = game.maps.marioTiles;
    //marioLevel = game.maps.mario;
    //marioLevel.preload();

    //stars = game.elements.stars;
    //stars.preload();

    squirrel = game.elements.squirrel;
    squirrel.preload();

    //itvjLogo = game.elements.itvjLogo;
    //itvjLogo.preload();

    HUD = game.indicators.hud;

    //updating = false;

    //Magdalene = game.music.magdalene;
    //Magdalene.preload();

  };

  preloader.create = function () {
    //Magdalene.create();
    game.state.start('game');
  };

  return preloader;
};
