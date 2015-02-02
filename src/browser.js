module.exports = function(configuration) {
	var fs = require('fs');
	var config;
	var resources;

	var Browser = function (conf) {
		console.log("browser.init() !");
		//console.log("browser init!");															// TEST CONSOLE LOG
		//console.log(config);																			// TEST CONSOLE LOG
		config = conf;
		resources = require("./resources.js");
		var home = conf.homeFolderPath;
		//console.log(home);																				// TEST CONSOLE LOG
	}

	var checkPath = function(folderPath) {
		fs.exists(folderPath, function(exists) {
			if(!exists) {
				throw new Error(resources.unexistingPathErrorMessage + " : " + folderPath);
			}
		})

		return true;
	};

	// Method for reading the local library

	Browser.prototype.getFileStructureFromFolder = function (homeFolder) {
		
		var result = {};
		result["type"] = "folder";

		//console.log(homeFolder);

		if(homeFolder[homeFolder.length - 1] != '/') {
			homeFolder += '/';
		}

		//console.log(homeFolder);
		
		if(checkPath(homeFolder)) {

			//console.log("homeFolderExists");
			result["path"] = homeFolder;

			var childs = fs.readdirSync(homeFolder);

			for (var i = childs.length - 1; i >= 0; i--) {
				// console.log(i);

				var child = childs[i];
				var newPath = homeFolder + child;

				//console.log(newPath);
				var pathStats = fs.lstatSync(newPath);

				if(pathStats.isDirectory()){
					// console.log(newPath + " is an existing directory!");

					var childDirectory = this.getFileStructureFromFolder(newPath);
					result[child] =  childDirectory;

				}

				else if(pathStats.isFile()) {

					// console.log(newPath + " is an existing file!");
					var fileExtension = "." + child.split('.').pop();
					var fileExtensions = config.fileExtensions;

					// console.log(fileExtensions);
					// console.log(fileExtension);

					for (var i = fileExtensions.length - 1; i >= 0; i--) {
						if(fileExtension === fileExtensions[i]) {
							// console.log(child + " is an " + fileExtension + " file");
							var fileInfo = {};
							fileInfo["type"] = "file";
							fileInfo["extension"] = fileExtension;
							fileInfo["path"] = newPath;
							result[child] = fileInfo;
							break;
						}
					};
				}

				else {
					console.log(newPath + " doesn't exists!");
				}

				//console.log(pathStats.isFile());
			};
		}

		return result;		
	}

	Browser.prototype.getFileStructure = function() {
		//console.log('browser.getFileStructure()');
		var homeFolder = config.homeFolderPath;

		return this.getFileStructureFromFolder(homeFolder);
	}

	return new Browser(configuration);
};




		// fs.exists(home, function(exists) {
		// 	var childs = [];
		// 	var fileExtensions = this.config.fileExtensions;
		// 	if(exists) {
		// 		//console.log("exists!");
		// 			childs = fs.readdirSync(home);
		// 		//console.log("dir read!");
		// }

		// 	childs.forEach(function(child) {

		// 		console.log("Child Element: " + child);								// TEST CONSOLE LOG

		// 		var isMusicFile = false;
		// 		for (var i = fileExtensions.length - 1; i >= 0; i--) {	

		// 			var fileExtension = fileExtensions[i];
		// 			if(child.indexOf(fileExtension) == child.length - fileExtension.length) {
		// 				//TEST PLAYING
		// 				console.log("Child element is music file with extension: " + fileExtension);
		// 				isMusicFile = true;
		//   			play.sound(home + "/" + child);
		// 			}
		// 		};
		// 	});
		// });