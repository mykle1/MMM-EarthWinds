/* Magic Mirror
 * Module: MMM-EarthWinds
 * 
 * By Mykle1 - MIT Licensed
 * 
 */

Module.register("MMM-EarthWinds",{
		
	defaults: {
			height:"1180px",
			width:"100%",
            animationSpeed: "3000",
            updateInterval: 60 * 60 * 1000,
	},
    
    
    start: function () {
		self = this;
        
        // ADDED: Schedule update timer courtesy of ninjabreadman
    setInterval(function() {
    self.updateDom(self.config.animationSpeed || 0); // use config.animationSpeed or revert to zero @ninjabreadman
    }, this.config.updateInterval);
        
	},
	
	getStyles: function() {
        return ["MMM-EarthWinds.css"];
    },


	
	getDom: function() {
		
		
		var iframe = document.createElement("IFRAME");
		iframe.classList.add("iframe");
		iframe.style = "border:none";
		iframe.width = this.config.width;
		iframe.height = this.config.height;
		type="text/javascript";
		iframe.src =  'https://earth.nullschool.net/#current/wind/surface/level/orthographic=-101.59,35.46,441' + new Date();
		
		return iframe;
	},
	
	 /////  Add this function to the modules you want to control with voice //////

    notificationReceived: function(notification, payload) {
        if (notification === 'HIDE_LOCATION') {
            this.hide(1000);
        }  else if (notification === 'SHOW_LOCATION') {
            this.show(1000);
        }
            
    },

});
