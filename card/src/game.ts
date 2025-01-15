export class Game {
	isActivePlayer(): string {
		return this.activePlayer;
	}

	turnChange(): void {
		if (this.activePlayer === this.player1) {
			this.activePlayer = this.player2;
		} else {
			this.activePlayer = this.player1;
		}
	}

	constructor(
		private player1: string,
		private player2: string,
		private activePlayer: string = player1,
	) {}

	getWinner(): string {
		return this.player1;
	}

	attackToInactivePlayer(damage: number): void {}
}
