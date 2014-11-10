module.exports = function (game) {

  var _ = require('lodash')

  var Stars = {
    game: game,
    stars: null
  };

  Stars.preload = function () {
    this.game.load.image('star', 'images/star.png#grunt-cache-bust');
  };

  Stars.create = function () {
    this.stars = game.add.group();
    this.stars.enableBody = true;
    for (var i = 0; i < 12; i++) {
      var star = this.stars.create( i * 70, 0, 'star');
      star.body.gravity.y = 6;
      star.body.bounce.y = 0.7 + Math.random() * 0.2;
    }
  };


  Stars.update = function () {
    if (_.isObject(game.levels.platform)) {
      this.game.physics.arcade.collide(this.stars,game.levels.platform.platforms);
    }

    if ( this.stars.countLiving() == 0 ) {
      for (var i = 0; i < 12; i++) {
        var star = this.stars.create( i * 70, 0, 'star');
        star.body.gravity.y = 6;
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
      }
    }
  };

  return Stars;

};