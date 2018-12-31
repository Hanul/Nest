Nest.MAIN = METHOD({

	run : () => {
		
		DSide.Node({
			tokenName : 'egg',
			socketServerPort : 8230,
			webSocketServerPort : 8231,
			version : 0,
			accountAddress : CONFIG.Nest.accountAddress,
			dataStructures : {
				
				Comment : {
					type : 'TargetStore',
					structure : {
						target : {
							notEmpty : true,
							size : {
								max : 128
							}
						},
						content : {
							notEmpty : true,
							size : {
								max : 1000
							}
						}
					}
				}
			},
			ips : READ_FILE({
				path : 'IP',
				isSync : true
			}).toString().replace(/\r/g, '').split('\n')
		});
	}
});
