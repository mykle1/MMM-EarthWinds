## MMM-EarthWinds

Displays current wind conditions on Earth

## Installation

* `git clone https://github.com/mykle1/MMM-EarthWinds` into the `~/MagicMirror/modules` directory.

* You will have to adjust the values in your config.js to suit your display's resolution 

## Config.js entry and options

    {
        disabled: false,
        module: 'MMM-EarthWinds',
        position: 'fullscreen',
        config: {
            height:"1180px", // adjust
		width:"100%",    // adjust
            animationSpeed: "3000",
            updateInterval: 24 * 60 * 60 * 1000,
        }
    },
