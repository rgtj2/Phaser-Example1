module.exports = function (game) {

  var _ = require('lodash')

  var Dude = {
    game: game,
    sprite: null,
    cursors: null
  };

  Dude.preload = function () {
    game.load.spritesheet('dude', 'images/dude.png#grunt-cache-bust', 32, 48);
  };


  Dude.create = function () {
    this.sprite = game.add.sprite(32, game.world.height - 150, 'dude')
    this.game.physics.arcade.enable(this.sprite);

    // Sprite physics properties
    this.sprite.body.bounce.y = 0.2;
    this.sprite.body.gravity.y = 300;
    this.sprite.body.collideWorldBounds = true;

    // PLayer walking L and R animations
    // 10fps, loop=true
    this.sprite.animations.add('left', [0,1,2,3], 10, true);
    this.sprite.animations.add('right', [5,6,7,8], 10, true);

    this.cursors = this.game.input.keyboard.createCursorKeys();

    this.tween = this.game.add.tween(this.sprite);
  };

  Dude.update = function () {
    this.sprite.body.velocity.x = 0

    // if the game has platforms, handle collisions
    if (_.isObject(game.levels.platform)) {
      game.physics.arcade.collide( this.sprite, game.levels.platform.platforms, platformCollisionHandler, null, this );
    }

    if (_.isObject(game.elements.stars)) {
      game.physics.arcade.overlap( this.sprite, game.elements.stars.stars, collectStar, null, this );
    }

    //
    // move this out into a controls module?
    if (this.cursors.left.isDown) {
      this.sprite.body.velocity.x = -150;
      this.sprite.animations.play('left');
    } else if (this.cursors.right.isDown) {
      this.sprite.body.velocity.x = 150;
      this.sprite.animations.play('right');
    } else {
      this.sprite.animations.stop();
      this.sprite.frame = 4;
    }
    if (this.cursors.up.isDown && this.sprite.body.velocity.y > -10) {
      this.sprite.body.velocity.y = -450;
    }
    // ^ move this out into a controls module?
    //

  };

  function platformCollisionHandler () {
    // hack-ish. without, player can't always jump
    // with, player sticks to platform bottom + sides
    this.sprite.body.velocity.y = -10;
  }

  //
  // Move this out into an actions module?
  function collectStar (dude,star) {
    star.kill();
    HUD.score += 10;
    HUD.scoreText.text = 'Score: ' + HUD.score;

    if (game.elements.stars.stars.countLiving() == 0) {
      this.tween.to( {x: 0, y: 450},1000);
      this.tween.start();
    };
  }
  // ^ Move this out?
  //

  return Dude;

};