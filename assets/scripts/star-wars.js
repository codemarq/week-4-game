// var starwars = {
	// playerHealth: 0,
	// playerCounterAttack: 0,
	// playerLives: 1,
	// enemyHealth: 0,
	// enemyCounterAttack: 0,
	
$(document).ready(function () {
		// put procedure call to game function here..
		
		

	// total available player characters
	var totalCards= [
		luke = {
			name: 'Luke Skywalker',
			healthPoints: 100,
			attackPower: 6,
			counterAttackPower: 6,
			image: '../images/luke.png',
			blaster: false,
			winQuote: '../sound/luke/whatjunk.wav',
			losingQuote: '../sound/luke/badfeel1.wav',
			loseQuote: '../sound/luke/converters.wav',
		}, 

		fett = {
			name: 'Boba Fett',
			healthPoints: 120,
			attackPower: 13,
			counterAttackPower: 30,
			image: '../images/fett.png',
			blaster: true,
			winQuote: '../sound/fett/cargo.wav',
			losingQuote: '../sound/fett/whatif.wav',
			loseQuote: '../sound/fett/asyouwish.wav',
		}, 

		r2d2 = {
			name: 'R2-D2',
			healthPoints: 135,
			attackPower: 4,
			counterAttackPower: 23,
			image: '../images/r2d2.png',
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
			image: '../images/c3po.png',
			blaster: true,
			winQuote: '../sound/c3po/deity.wav',
			losingQuote: '../sound/c3po/chances.wav',
			loseQuote: '../sound/c3po/iamc3po.wav',
		}, 

		chewie = {
			name: 'Chewbacca',
			healthPoints: 170,
			attackPower: 13,
			counterAttackPower: 13,
			image: '../images/chewie.png',
			blaster: true,
			winQuote: '../sound/chewie/chewie.wav',
			losingQuote: '../sound/chewie/chewieCry.wav',
			loseQuote: '../sound/chewie/wookie.wav',
		}, 

		han = {
			name: 'Han Solo',
			healthPoints: 135,
			attackPower: 6,
			counterAttackPower: 9,
			image: '../images/han.png',
			blaster: true,
			winQuote: '../sound/han/kesselrun.wav',
			losingQuote: '../sound/han/hokey.wav',
			loseQuote: '../sound/han/filth.wav',
		}, 

		vader = {
			name: 'Darth Vader',
			healthPoints: 180,
			attackPower: 12,
			counterAttackPower: 12,
			image: '../images/vader.png',
			blaster: true,
			winQuote: '../sound/vader/easy.wav',
			losingQuote: '../sound/vader/father.wav',
			loseQuote: '../sound/vader/join.wav',
		}, 
	];

	// random number in range-helper function 
	var randomRange = function (min, max) {
		return Math.floor(Math.random() * (max-min) +1 ) + min;
		console.log(min);
		console.log(max);
	};

	// initial cards displayed in gallery at game start

	//left off here with random # generator.
	var initialCards = function() {
		gallery = [];
		for (var i = 0; i < 6; i++) {
			// var rando = randomRange(0, totalCards.length -1);
			gallery.push(totalCards[randomRange(0, totalCards.length -1)]);
			console.log(gallery);
			var nameTag = '#name' + i;
			var gallTag = '#gallery' + i;
			var hpTag = '#hp' + i;
			
			// now draw this item to the gallery
			$('#name' + i).html('<h2>'+ gallery[i].name + '</h2>');
			$('#gallery'+i).attr(src=gallery[i].image);
			$('#hp' +i).html('<h3>' + gallery[i].healthPoints + '</h3>');
		}
	console.log(gallery);
	};
	initialCards();


	// reset code:
	// reset: function () {
	// 	playerHealth = 0;
	// 	playerCounterAttack = 0;
	// 	playerLives = 1;
	// 	enemyHealth = 0;
	// 	enemyCounterAttack = 0;
	// 	gallery = [];

		// maybe put in a timeout step

	// },
// }
	});