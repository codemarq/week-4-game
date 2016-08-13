
	// playerHealth: 0,
	// playerCounterAttack: 0,
	// playerLives: 1,
	// enemyHealth: 0,
	// enemyCounterAttack: 0,
	
$(document).ready(function () {

	// total available player characters
	var totalCards= [
		luke = {
			name: 'Luke',
			healthPoints: 100,
			attackPower: 6,
			counterAttackPower: 6,
			image: '../images/luke.png',
			blaster: false,
			winQuote: '../sound/luke/whatjunk.wav',
			losingQuote: '../sound/luke/badfeel1.wav',
			loseQuote: '../sound/luke/converters.wav',
		}, 

		r2d2 = {
			name: 'R2-D2',
			healthPoints: 135,
			attackPower: 4,
			counterAttackPower: 23,
			image: '../week-4-game/assets/images/r2d2.png',
			blaster: true,
			winQuote: '../sound/r2d2/r2d2a.wav',
			losingQuote: '../sound/r2d2/r2d2b.wav',
			loseQuote: '../sound/r2d2/r2d2b.wav',
		}, 

		c3po = {
			name: "C-3PO",
			healthPoints: 67,
			attackPower: 2,
			counterAttackPower: 2,
			image: '../week-4-game/assets/images/c3po.png',
			blaster: true,
			winQuote: '../sound/c3po/deity.wav',
			losingQuote: '../sound/c3po/chances.wav',
			loseQuote: '../sound/c3po/iamc3po.wav',
		}, 

		chewie = {
			name: 'Chewie',
			healthPoints: 170,
			attackPower: 13,
			counterAttackPower: 13,
			image: '../week-4-game/assets/images/chewie.png',
			blaster: true,
			winQuote: '../sound/chewie/chewie.wav',
			losingQuote: '../sound/chewie/chewieCry.wav',
			loseQuote: '../sound/chewie/wookie.wav',
		}, 

		vader = {
			name: 'Vader',
			healthPoints: 180,
			attackPower: 12,
			counterAttackPower: 12,
			image: '../week-4-game/assets/images/vader.png',
			blaster: true,
			winQuote: '../sound/vader/easy.wav',
			losingQuote: '../sound/vader/father.wav',
			loseQuote: '../sound/vader/join.wav',
		}, 

		fett = {
			name: 'Boba Fett',
			healthPoints: 120,
			attackPower: 13,
			counterAttackPower: 30,
			image: 'assets/images/fett.png',
			blaster: true,
			winQuote: '../sound/fett/cargo.wav',
			losingQuote: '../sound/fett/whatif.wav',
			loseQuote: '../sound/fett/asyouwish.wav',
		}, 

		han = {
			name: 'Han',
			healthPoints: 135,
			attackPower: 6,
			counterAttackPower: 9,
			image: '../week-4-game/assets/images/han.png',
			blaster: true,
			winQuote: '../sound/han/kesselrun.wav',
			losingQuote: '../sound/han/hokey.wav',
			loseQuote: '../sound/han/filth.wav',
		}, 	
	];

	var start = function () {
		var gallery = [];				
		for (var i = 0; i < 6; i++) {
			gallery.push(totalCards[i]);
			
			// now draw this item to the html gallery
			$('#name' + i).html('<h3>'+ gallery[i].name + '</h3>');
			$('#gallery' + i).attr('src', gallery[i].image);
			$('#hp' + i).html('<h3>' + gallery[i].healthPoints + '</h3>');
		}

		hide("#startButton");
		$("#battleMessage").empty();
		$("#gamePrompt").html("<h3>Click on your choice of player above.</h3>");
	};
	
	var selectCharacter = function () {
		var galleryClicks = 0;
		// set a counter for clicking on characters to govern populating arena
		
		if ($("#playerName") == "Player") {
			// pop from array on click and populate player or enemy div
		}
	};

	//  helper function to hide html elements
	var hide = function (elementId) {
		$(elementId).css("visibility", "hidden");
	};
	// helper function to show html elements
	var show = function (elementId) {
		$(elementId).css("visibility", "visible");
	};
	$('#galleryThumbnail').on("click", selectCharacter);

// reset code:
// reset: function () {
// 	playerHealth = 0;
// 	playerCounterAttack = 0;
// 	playerLives = 1;
// 	enemyHealth = 0;
// 	enemyCounterAttack = 0;
// 	gallery = [];
//  	hide('#resetButton');
//  	hide("#attackButton");
// 	$("#playerName").html("<h3>Player</h3>");
//  	$("#playerHP").html("<h3>HP = </h3>");
//  	$('#enemyName').html("<h3>Enemy</h3>");
// 	$('#enemyHP').html("<h3>HP = </h3>");
// maybe put in a timeout step
};

$('#startButton').on("click", start);

});

// attack function, include sound and hp dec, as well as cp ++

// if card hp <0 

// work on styling opaque colored backgrounds