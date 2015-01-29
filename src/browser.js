var Browser = function (config) {
	//console.log("Browser init !");
	console.log("browser init!");															// TEST CONSOLE LOG
	console.log(config);																			// TEST CONSOLE LOG

	var home = config.homeFolderPath;

	console.log(home);																				// TEST CONSOLE LOG
	fs.exists(home, function(exists) {
		var childs = [];
		var fileExtensions = config.fileExtensions;
		if(exists) {
			//console.log("exists!");
				childs = fs.readdirSync(home);
			//console.log("dir read!");
	}

		childs.forEach(function(child) {

			console.log("Child Element: " + child);								// TEST CONSOLE LOG

			var isMusicFile = false;
			for (var i = fileExtensions.length - 1; i >= 0; i--) {	

				var fileExtension = fileExtensions[i];
				if(child.indexOf(fileExtension) == child.length - fileExtension.length) {
					//TEST PLAYING
					console.log("Child element is music file with extension: " + fileExtension);
					isMusicFile = true;
	  			play.sound(home + "/" + child);
				}
			};
		});
	});
};

Browser.getFileStructure = function (argument) {
	// body...	
}
