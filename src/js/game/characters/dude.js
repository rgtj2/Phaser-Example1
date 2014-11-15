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


  Dude.create = function (level) {

    this.sprite = game.add.sprite(32, 32, 'dude');
    this.game.physics.arcade.enable(this.sprite);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.frame = 4;
    this.cursors = this.game.input.keyboard.createCursorKeys();

    if (level == 'desert') {

      this.sprite.anchor.setTo(.5,.5);
      this.game.camera.follow(this.sprite);

    } else if (level == 'platform') {


      this.sprite.body.bounce.y = 0.2;
      this.sprite.body.gravity.y = 300;
      this.sprite.animations.add('left', [0,1,2,3], 10, true);
      this.sprite.animations.add('right', [5,6,7,8], 10, true);
      this.tween = this.game.add.tween(this.sprite);

    }

  };

  Dude.update = function (level) {

    if (level == 'desert') {
      this.sprite.body.velocity.x = 0
      this.sprite.body.velocity.y = 0

      game.physics.arcade.collide( this.sprite, game.maps.desert.layer);

      if (this.cursors.left.isDown && updating==false) {
        this.sprite.x -= 40;
        this.sprite.frame = 1;
        updating = true;
        setTimeout(function(){updating=false}, 500);
      } else if (this.cursors.right.isDown  && updating==false) {
        this.sprite.x += 40;
        this.sprite.frame = 6;
        updating = true;
        setTimeout(function(){updating=false}, 500);
      } 

      if (this.cursors.up.isDown && updating==false) {
        this.sprite.y -= 40;
        this.sprite.frame = 4;
        updating = true;
        setTimeout(function(){updating=false}, 500);
      }

      if (this.cursors.down.isDown && updating==false) {
        this.sprite.y += 40;
        this.sprite.frame = 4;
        updating = true;
        setTimeout(function(){updating=false}, 500);
      } else {
        this.sprite.animations.stop();
      };


    } else if (level == 'platform') {
      this.sprite.body.velocity.x = 0

      game.physics.arcade.collide( this.sprite, game.maps.platform.platforms, platformCollisionHandler, null, this );

      game.physics.arcade.collide( this.sprite, game.maps.mario.layer);

      if (this.cursors.left.isDown) {
        this.sprite.body.velocity.x = -150;
        this.sprite.animations.play('left');
      } else if (this.cursors.right.isDown ) {
        this.sprite.body.velocity.x = 150;
        this.sprite.animations.play('right');
      } else { this.sprite.animations.stop();}

      if (this.cursors.up.isDown && this.sprite.body.velocity.y > -10) {
        this.sprite.body.velocity.y = -450;
      }

      if (this.cursors.down.isDown) {
        this.sprite.body.gravity.y = 1200;
        this.sprite.frame = 4;
      } else {
        this.sprite.body.gravity.y = 300;
      }

    }

    if (_.isObject(game.elements.stars)) {
      game.physics.arcade.overlap( this.sprite, game.elements.stars.stars, collectStar, null, this );
    }


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

    if (game.elements.stars.stars.countLiving() == 0) {
      this.tween.to( {x: 0, y: 450},1000);
      this.tween.start();
    };
  }

  return Dude;

};