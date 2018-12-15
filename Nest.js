require(process.env.UPPERCASE_PATH + '/LOAD.js');

BOOT({
	CONFIG : {
		defaultBoxName : 'Nest',
		isDevMode : true,
		webServerPort : 1216
	}
});