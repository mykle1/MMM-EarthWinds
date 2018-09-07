## MMM-EarthWinds

Live background that displays current wind conditions on Earth

Any orientation you desire. Just click and drag.

## Video

https://www.youtube.com/watch?v=syr_GCnpv2A&lc=z22nxl5pzvm0uzitjacdp432n5huphw1t1poemhvvuhw03c010c

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
