$(function(){


	$('#playTrick').on('click', function(){
		

		if (trick_displayed == false){
			console.log('no trick');
		} else {
			console.log('trick displayed');
			// Reset everything
			resetVisuals();
			restartValues();
			parseTrickData(trickData);
			calculateAverage();
			switchState();
			drawTrick();
		}
	});

})