$(document).ready(function () {

	// global game variables
	var playerHealth = 0;
	var playerCounterAttack = 0;
	var playerLives = 1;
	var enemyHealth = 0;
	var enemyCounterAttack = 0;
	var totalPlayers = 0;

	// total available player characters
	var characters = [
		luke = {
			name: 'Luke',
			healthPoints: 135,
			attackPower: 6,
			counterAttackPower: 6,
			image: 'assets/images/luke.png',
			blaster: false,
			winQuote: 'assets/sound/luke/whatjunk.wav',
			losingQuote: 'assets/sound/luke/badfeel1.wav',
			loseQuote: 'assets/sound/luke/converters.wav',
		},

		r2d2 = {
			name: 'R2-D2',
			healthPoints: 100,
			attackPower: 4,
			counterAttackPower: 23,
			image: 'assets/images/r2d2.png',
			blaster: true,
			winQuote: 'assets/sound/r2d2/r2d2a.wav',
			losingQuote: 'assets/sound/r2d2/r2d2b.wav',
			loseQuote: 'assets/sound/r2d2/r2d2b.wav',
		},

		vader = {
			name: 'Vader',
			healthPoints: 180,
			attackPower: 12,
			counterAttackPower: 12,
			image: 'assets/images/vader.png',
			blaster: true,
			winQuote: 'assets/sound/vader/easy.wav',
			losingQuote: 'assets/sound/vader/father.wav',
			loseQuote: 'assets/sound/vader/join.wav',
		},

		fett = {
			name: 'Boba Fett',
			healthPoints: 120,
			attackPower: 13,
			counterAttackPower: 30,
			image: 'assets/images/fett.png',
			blaster: true,
			winQuote: 'assets/sound/fett/cargo.wav',
			losingQuote: 'assets/sound/fett/whatif.wav',
			loseQuote: 'assets/sound/fett/asyouwish.wav',
		}
	];

	//  helper function to hide html elements
	var hide = function (elementId) {
		$(elementId).css("visibility", "hidden");
	};
	// helper function to show html elements
	var show = function (elementId) {
		$(elementId).css("visibility", "visible");
	};

	var write = function (elementId, thing) {
		$(elementId).html('<h3>' + thing + "</h3>")
	};

	var image = function (elementId, image) {
		$(elementId).attr('src', image);
	};

	var start = function () {
		// gallery = [];				
		// for (var i = 0; i < 6; i++) {
		// 	gallery.push(totalCards[i]);
			
		// 	// now draw this item to the html gallery
		// 	$('#name' + i).html('<h3>'+ gallery[i].name + '</h3>');
		// 	$('#gallery' + i).attr('src', gallery[i].image);
		// 	$('#hp' + i).html('<h3>' + gallery[i].healthPoints + '</h3>');
		// }

		hide("#startButton");
		show('#gallery');
		$("#battleMessage").empty();


		$("#gamePrompt").html("<h3>Click on your choice of player above.</h3>");
	};
	
	var player = {};
	var enemy = {};
		
	// 		// pop from array on click and populate player or enemy div

	
	$('.gallery').click(function () {
		var charClicked = $(this);
		var value = charClicked.attr('value');
		choice = characters[value];

		if (totalPlayers == 0) {
			player = choice;
			write('#playerName', player.name);
			write('#playerHP', player.healthPoints);
			image('#playerImage', player.image);
			hide(this);
			totalPlayers =1;
		}
		else if (totalPlayers == 1) {
			enemy = choice;
			write('#enemyName', enemy.name);
			write('#enemyHP', enemy.healthPoints);
			image('#enemyImage', enemy.image);
			hide(this);
			totalPlayers = 2;
		}
		else {
			write('#gamePrompt', 'You can only fight one enemy at a time!');
		}
	});

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
// };
hide('#gallery');
$('#startButton').on("click", start);

});

// attack function, include sound and hp dec, as well as cp ++

// if card hp <0 

// work on styling opaque colored backgrounds