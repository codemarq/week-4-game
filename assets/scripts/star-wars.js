var starwars = {
	playerHealth: 0,
	playerCounterAttack: 0,
	playerLives: 1,
	enemyHealth: 0,
	enemyCounterAttack: 0;


	// player constructor class:
	function Player (name, healthPoints, attackPower, counterAttackPower, 
		image, blaster, winQuote, losingQuote, loseQuote) {
		// player attributes
		this.name = name;
		this.healthPoints = healthPoints;
		this.attackPower = attackPower;
		this.counterAttackPower = counterAttackPower;
		this.image = image;
		this.blaster = blaster;
		this.winQuote = winQuote;
		this.losingQuote = losingQuote;
		this.loseQuote = loseQuote;

		// player methods

	}



	// players object
	
	var galleryCards = [];

	galleryCards.push (Player('Luke Skywalker', 100, 6, 6, '../images/luke-skywalker.png',
	 false, '../sound/luke/whatjunk.wav', '../sound/luke/badfeel1.wav', '../sound/luke/converters.wav'));

	galleryCards.push (Player('Boba Fett', 100, 6, 6, '../images/Boba_Fett_transparent.png',
	 false, '../sound/fett/cargo.wav', '../sound/fett/whatif.wav', '../sound/fett/asyouwish.wav'));

	galleryCards.push (Player('R2D2', 100, 6, 6, '../images/R2-D2.png',
	 false, '../sound/R2D2/R2D2a.wav', '../sound/R2D2/R2D2b.wav', '../sound/R2D2/R2D2b.wav'));

	// galleryCards.push (Player('luke', 100, 6, 6, '../images/luke-skywalker.png',
	//  false, '../sound/luke/whatjunk.wav', '../sound/luke/badfeel1.wav', '../converters.wav'));

	// galleryCards.push (Player('luke', 100, 6, 6, '../images/luke-skywalker.png',
	//  false, '../sound/luke/whatjunk.wav', '../sound/luke/badfeel1.wav', '../converters.wav'));

	// galleryCards.push (Player('luke', 100, 6, 6, '../images/luke-skywalker.png',
	//  false, '../sound/luke/whatjunk.wav', '../sound/luke/badfeel1.wav', '../converters.wav'));

	// galleryCards.push (Player('luke', 100, 6, 6, '../images/luke-skywalker.png',
	//  false, '../sound/luke/whatjunk.wav', '../sound/luke/badfeel1.wav', '../converters.wav'));


	// reset code:
	var reset = function () {
		playerHealth: 0,
		playerLives: 1,
		enemyHealth: 0;
		// maybe put in a timeout step

	}
}