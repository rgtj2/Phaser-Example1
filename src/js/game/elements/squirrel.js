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
    for (var i = 0; i < 10; i++) {
      var s = this.sprite.create( i * 60, i * 35, 'squirrel', 0);
      s.body.gravity.y = 100;
      s.scale.x = 0.7;
      s.scale.y = 0.7;
      s.body.velocity.x = 305;
      s.frame = 0;
      s.body.bounce.y = 1 + Math.random() * 0.2;
      s.body.collideWorldBounds = true;
    }
  };


  Squirrel.update = function () {

    this.game.physics.arcade.collide( this.sprite, game.maps.platform.platforms );

    _.each(this.sprite.children, function(squirrel){

      // at end, go back to start
      if (squirrel.x > 725) {

        // monster high, go low
        if (game.characters.monster.sprite.y < 200) {
          squirrel.y = 250 + (100 + Math.random() * 0.4);
        } else if (game.characters.monster.sprite.y > 200) {
          // monster low, go high
          squirrel.y = Math.random() * 0.1;
        }
        squirrel.x = 0;
      }
      
      squirrel.body.velocity.x = 305;

      if (squirrel.body.velocity.y > 350) {
        squirrel.body.velocity.y = -50;
      }
    });

    if ( this.sprite.countLiving() == 0 ) {
      for (var i = 0; i < 10; i++) {
        var s = this.sprite.create( i * 60, i * 35, 'squirrel', 0);
        s.body.gravity.y = 100;
        s.scale.x = 0.7;
        s.scale.y = 0.7;
        s.body.velocity.x = 305;
        s.frame = 0;
        s.body.bounce.y = 1 + Math.random() * 0.2;
        s.body.collideWorldBounds = true;
      }
    }


  };

  return Squirrel;

};