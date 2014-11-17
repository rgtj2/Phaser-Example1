module.exports = function (game) {

  var _ = require('lodash')

  var Monster = {
    game: game,
    sprite: null,
    cursors: null
  };

  Monster.preload = function () {
    game.load.spritesheet('monster', 'images/monster_front.png#grunt-cache-bust', 100, 140);
  };


  Monster.create = function (level) {

    this.sprite = game.add.sprite(0,350, 'monster');
    this.game.physics.arcade.enable(this.sprite);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.frame = 1;
    this.sprite.scale.x = 0.5;
    this.sprite.scale.y = 0.5;
    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.game.camera.follow(this.sprite);

    this.sprite.body.bounce.y = 0.2;
    this.sprite.body.gravity.y = 300;
    this.tween = this.game.add.tween(this.sprite);

  };

  Monster.update = function (level) {

    this.sprite.body.velocity.x = 0;

    game.physics.arcade.collide( this.sprite, game.maps.platform.platforms, platformCollisionHandler, null, this );

    game.physics.arcade.collide( this.sprite, game.maps.mario.layer);

    if (this.cursors.left.isDown) {
      this.sprite.body.velocity.x = -150;
      this.sprite.frame = 0;
    } else if (this.cursors.right.isDown ) {
      this.sprite.body.velocity.x = 150;
      this.sprite.frame = 1;
    }

    if (this.cursors.up.isDown && this.sprite.body.velocity.y > -10) {
      this.sprite.body.velocity.y = -450;
    }

    if (this.cursors.up.isDown && this.cursors.right.isDown) {
      this.sprite.frame = 3;
    } else if (this.cursors.up.isDown && this.cursors.left.isDown) {
      this.sprite.frame = 2;
    }

    if (this.cursors.down.isDown) {
      this.sprite.body.gravity.y = 1200;
    } else {
      this.sprite.body.gravity.y = 300;
    }


    if (_.isObject(game.elements.stars)) {
      game.physics.arcade.overlap( this.sprite, game.elements.stars.stars, collectStar, null, this );
    }
    game.physics.arcade.overlap(this.sprite, game.elements.squirrel.sprite, killSquirrel, null, this);

  };

  function platformCollisionHandler () {
    // hack-ish. without, player can't always jump
    // with, player sticks to platform bottom + sides
    this.sprite.body.velocity.y = -10;
  }

  function collectStar (dude,star) {

    star.kill();
    HUD.score += 10;
    HUD.scoreText.text = 'Score: ' + HUD.score;

  }

  function killSquirrel (dude,squirrel) {
    squirrel.kill();
    HUD.score += 50;
    HUD.scoreText.text = 'Score: ' + HUD.score;

    //
    if (game.elements.squirrel.sprite.countLiving() == 0) {
      this.tween.to( {x: 0, y: 375},50);
      this.tween.start();
    };

  }

  return Monster;

};