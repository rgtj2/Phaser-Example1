var Phaser = require('Phaser')

  , _ = require('lodash')

  , properties = require('./properties')

  , components =

      { state:
        { boot: require('./states/boot.js')
        , preloader: require('./states/preloader.js')
        , game: require('./states/game.js')
        , level1: require('./states/level1.js')
        , level2: require('./states/level2.js')
        }

      , maps:
        { platform: require('./maps/platform.js')
        , desert: require('./maps/desert.js')
        , desertTiles: require('./maps/desert_tilemap.js')
        , mario: require('./maps/mario.js')
        , marioTiles: require('./maps/mario_tilemap.js')
        }

      , characters:
        { dude: require('./characters/dude.js')
        , monster: require('./characters/monster.js')
        , propellerCar: require('./characters/propeller_car.js')
        }

      , elements:
        { stars: require('./elements/stars.js') 
        , itvjLogo: require('./elements/itvj_logo.js')
        , squirrel: require('./elements/squirrel.js')
        }

      , indicators:
        { hud: require('./indicators/hud.js') }

      , music:
        { magdalene: require('./music/magdalene.js') }

      }

  , game = new Phaser.Game(properties.size.x, properties.size.y, Phaser.AUTO, 'game');

// Register each component
_.each(components, function(componentList, componentCategory) {

  // Create component category object on the game if it doesn't already exist
  // State already exists
  if ( !(_.has(game, componentCategory)) ) {
    game[componentCategory] = {}
  };

  // Loop through the component list and add each component
  _.each(componentList, function(component, componentName ) {

    if ( (componentCategory.toString() == 'state') ) {
      // use state's add method
      game[componentCategory].add( componentName, component(game) );
    } else {
      // create the component the component category
      game[componentCategory][componentName] = component(game)
    };
  });
});

// Global variables for character instances
var player, monster, propellerCar;

// Global variables for Level instances
var platformLevel, desertLevel, desertTiles, marioLevel, marioTiles;

var Level, isDesert;

// Global variables for element instances
var stars, itvjLogo, squirrel;

// Global variables for indicator instances
var HUD;

// Global variables for music instances
var Magdalene;

var updating;

game.state.start('boot');
