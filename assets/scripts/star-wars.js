var starwars = {

	playerHealth: 0,
	playerCounterAttack: 0,
	playerLives: 1,
	enemyHealth: 0,
	enemyCounterAttack: 0,
	cards: [
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
	],


	// reset code:
	var reset = function () {
		var playerHealth = 0;
		var	playerCounterAttack = 0;
		var	playerLives = 1;
		var	enemyHealth = 0;
		var	enemyCounterAttack = 0;
		var	galleryCards = [];

		// maybe put in a timeout step

	};
}