window.onload = function () {
	console.log('js.js reporting for duty!');
/*
	var makeBox = document.createElement('div');
	var styleDiv = makeBox.style();
    styleDiv.height = ('45px');
    styleDiv.width = ('45px');
    styleDiv.border = ('2px solid red');
*/

	var x = 5;
	var y = 10;

	var adder = function(a, b) {
		total = a + b;
		return total;
	}

	adder(x, y);

    var bandRater = function(band, power, soul, taste){
    	if ((power + soul + taste) <= 6) {
    		console.log('theyre bad');
    	}
    	else if ((power + soul + taste) <= 12) {
    		console.log('they could be better')
    	}
    	else if ((power + soul + taste) <= 16) {
    		console.log('they could be a lil better')
    	}
    	else {
    		console.log('theyre awesome')
    	}
    }

    bandRater('greenday', 6, 7, 7);

	
}

