$(document).ready(function () {

	// global game variables
	var wins = 0;
	var totalPlayers = 0;
	var player = {};
	var enemy = {};
	var baseAttackPower = 0;
	var enemiesRemaining = 3;

	// total available player characters
	var characters = [
		luke = {
			name: 'Luke',
			healthPoints: 135,
			attackPower: 8,
			counterAttackPower: 6,
			image: 'assets/images/luke.png',
			attackAudio: 'assets/sound/effects/saberdown.wav',
			winAudio: 'assets/sound/luke/whatjunk.wav',
			loseAudio: 'assets/sound/luke/badfeel1.wav',
			startAudio: 'assets/sound/luke/converters.wav',
		},

		r2d2 = {
			name: 'R2-D2',
			healthPoints: 100,
			attackPower: 4,
			counterAttackPower: 6,
			image: 'assets/images/r2d2.png',
			attackAudio: 'assets/sound/effects/laser.wav',
			winAudio: 'assets/sound/r2d2/r2d2a.wav',
			loseAudio: 'assets/sound/r2d2/r2d2b.wav',
			startAudio: 'assets/sound/r2d2/r2d2b.wav',
		},

		vader = {
			name: 'Vader',
			healthPoints: 180,
			attackPower: 12,
			counterAttackPower: 20,
			image: 'assets/images/vader.png',
			attackAudio: 'assets/sound/effects/saberdown.wav',
			winAudio: 'assets/sound/vader/easy.wav',
			loseAudio: 'assets/sound/vader/father.wav',
			startAudio: 'assets/sound/vader/bidding.wav',
		},

		fett = {
			name: 'Boba Fett',
			healthPoints: 120,
			attackPower: 13,
			counterAttackPower: 9,
			image: 'assets/images/fett.png',
			attackAudio: 'assets/sound/effects/laser.wav',
			winAudio: 'assets/sound/fett/cargo.wav',
			loseAudio: 'assets/sound/fett/whatif.wav',
			startAudio: 'assets/sound/fett/asyouwish.wav',
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
	// helper function for writing html elements
	var write = function (elementId, thing) {
		$(elementId).html('<h3>' + thing + "</h3>")
	};
	// helper function to replace images
	var image = function (elementId, image) {
		$(elementId).attr('src', image);
	};

	// helper function to play audio
	var playAudio = function (sound) {
		var audio = new Audio (sound);
		audio.play();
	};

	// start game function
	var start = function () {
		hide("#startButton");
		show('#gallery');
		$("#battleMessage").empty();
		$("#gamePrompt").html("<h3>Click on your choice of player above.</h3>");
	};
			
	// select characters and move them to arena
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
			playAudio(player.startAudio);
			write('#gamePrompt', 'Choose your first enemy!');
			$('.gallery').css('background-color', '#ff4d4d');
			baseAttackPower = player.attackPower;
		}
		else if (totalPlayers == 1) {
			enemy = choice;
			write('#enemyName', enemy.name);
			write('#enemyHP', enemy.healthPoints);
			image('#enemyImage', enemy.image);
			hide(this);
			totalPlayers = 2;
			playAudio(enemy.startAudio);
			show('#attackButton');
			write('#gamePrompt', 'FIGHT!');
		}
		else {
			write('#gamePrompt', 'You can only fight one enemy at a time!');
		}
	});

	// attack functions
	$('#attackButton').click(function () {
		playAudio(player.attackAudio);
		write('#gamePrompt', 'Wins: ' + wins);
		// player attack 

		if (player.healthPoints > 0 && enemy.healthPoints >0) {
			enemy.healthPoints -= player.attackPower;
			player.healthPoints -= enemy.counterAttackPower;
			write('#battleMessage', "You dealt " + player.attackPower + " damage to enemy. Enemy attacked you for " + enemy.counterAttackPower + " damage");
			
			player.attackPower += baseAttackPower;
			write('#playerHP', player.healthPoints);
			write('#enemyHP', enemy.healthPoints);

			// if player dead
			if (player.healthPoints <= 0) {
				show('#resetButton');
				write('#gamePrompt', "The force was not with you!");
				playerLives = 0;
				hide('#attackButton');
				playAudio(player.loseAudio);
			}

			// enemy dead
			else if (enemy.healthPoints <= 0 && player.healthPoints >= 0) {
				write('#enemyName', 'Enemy');
				write('#enemyHP', 'HP = ');
				image('#enemyImage', "https://placehold.it/200x200?text=Enemy");
				totalPlayers = 1;
				wins ++;
				write('#gamePrompt', 'Wins: ' + wins);
				write('#battleMessage', 'Choose your next enemy.');
				playAudio(enemy.loseAudio);
				enemy = {};
				enemiesRemaining --;
			}

			if (enemiesRemaining == 0) {
				show('#resetButton');
				write('#battleMessage', 'VICTORY!');
				hide('#attackButton');
				playAudio(player.winAudio);
			}
		};		
	});


	// reset code:
	var reset = function () {
	    wins = 0;
		totalPlayers = 0;
		player = {};
		enemy = {};
		baseAttackPower = 0;
		enemiesRemaining = 3;
	 	hide('#resetButton');
	 	hide("#attackButton");
	 	write('#battleMessage', 'Click Start Button to begin game!');
	 	write('#playerName', 'Player');
	 	write('#playerHP', 'HP = ');
	 	image('#playerImage', "https://placehold.it/200x200?text=Player");
	 	write('#enemyName', 'Enemy');
	 	write('#enemyHP', 'HP = ');
	 	image('#enemyImage', "https://placehold.it/200x200?text=Enemy");
	 	show('#startButton');
	};

	hide('#gallery');
	$('#startButton').on("click", start);
	$('#resetButton').on("click", reset);
});