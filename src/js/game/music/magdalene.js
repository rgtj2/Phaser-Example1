module.exports = function (game) {

  // This can prob be a more general music module

  var Magdalene = {
    game: game
  };

  Magdalene.preload = function () {
    this.game.load.audio('magdalene', ['audio/magdalene.mp3'])
  };

  Magdalene.create = function () {
    var music = this.game.add.audio('magdalene');
    music.play();
  };

  Magdalene.update = function () {

  };

  return Magdalene;

};