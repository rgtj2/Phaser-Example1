var Phaser = require('Phaser')

  , _ = require('lodash')

  , properties = require('./properties')

  , components =

      { state:
        { boot: require('./states/boot.js')
        , preloader: require('./states/preloader.js')
        , game: require('./states/game.js')
        }

      , levels:
        { platform: require('./levels/platform.js') }

      , characters:
        { dude: require('./characters/dude.js') }

      , elements:
        { stars: require('./elements/stars.js') 
        , itvjLogo: require('./elements/itvj_logo.js')
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
var player;

// Global variables for Level instances
var platformLevel;

// Global variables for element instances
var stars, itvjLogo;

// Global variables for indicator instances
var HUD;

// Global variables for music instances
var Magdalene;

game.state.start('boot');