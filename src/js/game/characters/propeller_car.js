module.exports = function (game) {

  var _ = require('lodash')

  var PropellerCar = {
    game: game,
    sprite: null,
    cursors: null
  };

  PropellerCar.preload = function () {
    game.load.spritesheet('propellerCar', 'images/propeller_car.png#grunt-cache-bust', 150, 88);
  };


  PropellerCar.create = function (level) {

    this.sprite = game.add.sprite(32, 32, 'propellerCar');
    this.game.physics.arcade.enable(this.sprite);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.frame = 1;
    this.cursors = this.game.input.keyboard.createCursorKeys();

    this.sprite.scale.x = 0.5;
    this.sprite.scale.y = 0.5;

    this.sprite.anchor.setTo(.5,.5);
    this.game.camera.follow(this.sprite);


  };

  PropellerCar.update = function (level) {

    this.sprite.body.velocity.x = 0
    this.sprite.body.velocity.y = 0

    game.physics.arcade.collide( this.sprite, game.maps.desert.layer);

    if (this.cursors.left.isDown) {
      this.sprite.x -= 40;
      this.sprite.frame = 0;

    } else if (this.cursors.right.isDown) {
      this.sprite.x += 40;
      this.sprite.frame = 1;
    } 

    if (this.cursors.up.isDown) {
      this.sprite.y -= 40;
    }

    if (this.cursors.down.isDown) {
      this.sprite.y += 40;
    }


  };
  return PropellerCar;

};