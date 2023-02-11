let playGame = confirm('Do you want to play (rock, paper, and scissors)');
if (playGame) {
	let playChoice = prompt('Pick between (Rock, Paper, Scissors)??');
	if (playChoice) {
		let playerOne = playChoice.trim().toLowerCase();
		if (
			playerOne === 'rock' ||
			playerOne === 'paper' ||
			playerOne === 'scissors'
		) {
			let computerChoice = Math.floor(Math.random() * 3 + 1);
			let computer =
				computerChoice === 2
					? 'paper'
					: computerChoice === 3
					? 'rock'
					: 'scissors';
			let result =
				playerOne === computer
					? `playerOne: ${playerOne}\ncomputer: ${computer}\nTie game`
					: playerOne === 'rock' && computer === 'paper'
					? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins`
					: playerOne === 'paper' && computer === 'scissors'
					? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins`
					: playerOne === 'scissors' && computer === 'rock'
					? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer wins`
					: `playerOne: ${playerOne}\ncomputer: ${computer}\nplayerone wins`;
			alert(result);
			let playAgain = confirm('Do you want to play again??');
			playAgain ? location.reload() : 'Thanks for playing!';
		} else {
			alert(playChoice + ' is not a valid choice');
		}
	} else {
		alert(playChoice + ' is not a valid choice');
	}
} else {
	alert('You decided not to play');
}
