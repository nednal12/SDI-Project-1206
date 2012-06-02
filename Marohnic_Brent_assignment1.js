// Author: Brent Marohnic
// Date: 2012-05-31
// Created for: SDI Online
// Assignment Name: Deliverable 1
// Description: Dream Car

// alert("JavaScript works!");


	var	consultWithSpouse = false,
		sheAgrees = 'Yes',
		myFunds = 6000,
		carPrice = 5500,
		taxRate = 1.07,
		emotionalStatePrefix = 'I\'m very ',
		emotionalStateSuffix,				/* Will be set later within the code */
		totalPrice,							/* Will be set later within the code */
		wifesAttitude;						/* Will be set later within the code */

	console.log("consultWithSpouse: ", consultWithSpouse);
	console.log("sheAgrees: ", sheAgrees);
	console.log("myFunds: ", myFunds);
	console.log("carPrice: ", carPrice);
	console.log("taxRate: ", taxRate);
	console.log("emotionalStatePrefix: ", emotionalStatePrefix);
	console.log("emotionalStateSuffix: ", emotionalStateSuffix);
	console.log("totalPrice: ", totalPrice);
	console.log("wifesAttitude: ", wifesAttitude);

	if (!consultWithSpouse){
	
		if (myFunds >= carPrice) {
		
			emotionalStateSuffix = "happy ";
			totalPrice = carPrice * taxRate;
			console.log("Output A: " + emotionalStatePrefix + emotionalStateSuffix + "but $" + totalPrice + ".00 lighter.");
			
		} else {
		
			emotionalStateSuffix = "sad ";
			totalPrice = carPrice * taxRate;
			console.log("Output B: " + emotionalStatePrefix + emotionalStateSuffix + "but I saved $" + totalPrice + ".00.");
			
		};
		
	} else {
	
		if (sheAgrees === 'Yes') {
		
			emotionalStateSuffix = "happy.";
			wifesAttitude = ' My wife\'s amazing.'
			console.log("Output C: " + emotionalStatePrefix + emotionalStateSuffix + wifesAttitude);
			
		} else {
		
			emotionalStateSuffix = "sad."
			wifesAttitude = ' My wife\'s stingy.'
			console.log("Output D: " + emotionalStatePrefix + emotionalStateSuffix + wifesAttitude);
			
		};
		
	};