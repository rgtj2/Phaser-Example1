module.exports = function (game) {

  var _ = require('lodash')

  var Squirrel = {
    game: game,
    sprite: null
  };

  Squirrel.preload = function () {
    this.game.load.spritesheet('squirrel', 'images/squirrel.png#grunt-cache-bust', 58, 70);
  };

  Squirrel.create = function () {
    this.sprite = game.add.group();
    this.sprite.enableBody = true;
    for (var i = 0; i < 5; i++) {
      var s = this.sprite.create( i * 200, i * 85, 'squirrel', 0);
      s.body.gravity.y = 100;
      s.body.bounce.y = 1 + Math.random() * 0.2;
      s.body.collideWorldBounds = true;
    }

  };


  Squirrel.update = function () {

    this.game.physics.arcade.collide( this.sprite, game.maps.platform.platforms );

    _.each(this.sprite.children, function(squirrel){
      if (squirrel.x > 725) {
        if (game.characters.monster.sprite.x < 600 ) {
          if (game.characters.monster.sprite.y < 250) {
            squirrel.y = 300;
          } else { squirrel.y = 100 }
          squirrel.x = 0;
        } else { squirrel.x = 0}
      } else {
        squirrel.body.velocity.x = 305;
        squirrel.frame = 0;
      }
    });

    if ( this.sprite.countLiving() == 0 ) {
      for (var i = 0; i < 5; i++) {
        var s = this.sprite.create( i * 200, i * 85, 'squirrel', 0);
        s.body.gravity.y = 100;
        s.body.bounce.y = 1 + Math.random() * 0.2;
        s.body.collideWorldBounds = true;
      }
    }


  };

  return Squirrel;

};