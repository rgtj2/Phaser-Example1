module.exports = function (game) {

  var HUD = {
    game: game,
    score: 0,
    scoreText: null
  };

  HUD.preload = function () {

  };

  HUD.create = function () {
    var style = {font: "30px Arial", fill: "#666666", align: "center"};
    this.scoreText = this.game.add.text(0, 0, 'Score: 0', style);
  };

  HUD.update = function () {

  };

  return HUD;

};