require(process.env.UPPERCASE_PATH + '/LOAD.js');

BOOT({
	
	CONFIG : {
		defaultBoxName : 'Nest',
		isDevMode : true,
		webServerPort : 1216,
		
		Nest : {
			accountAddress : '0xEcCFaA737a5A80bE37e4E70130628E692413cB36'
		}
	},
	
	NODE_CONFIG : {
		// CPU 클러스터링 기능을 사용하지 않습니다.
		isNotUsingCPUClustering : true
	}
});