$(function(){


	$('#playTrick').on('click', function(){
		

		if (trick_displayed == false){
			console.log('no trick');
		} else {
			console.log('trick displayed');
			// Reset everything
			resetVisuals();
			resetValues();
			parseTrickData(trickData);
			calculateAverage();
			checkNumberOfJumps();
			switchState();
			drawTrick();
		}
	});

})