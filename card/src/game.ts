export class Game {
	isActivePlayer(): string {
		return this.activePlayer;
	}

	turnChange(): void {
		if (this.activePlayer === this.player1Name) {
			this.activePlayer = this.player2Name;
		} else {
			this.activePlayer = this.player1Name;
		}
	}

	constructor(
		// TODO: playerのinterfaceを切る
		private player1Name: string,
		private player2Name: string,
		private player1Life = 1,
		private player2Life = 1,
		private activePlayer: string = player1Name,
	) {}

	getWinner(): string | null {
		if (this.player1Life <= 0) {
			return this.player2Name;
		}
		if (this.player2Life <= 0) {
			return this.player1Name;
		}
		return null;
	}

	attackToInactivePlayer(damage: number): void {
		if (this.isActivePlayer() === this.player1Name) {
			this.player2Life -= damage;
		} else {
			this.player1Life -= damage;
		}
	}
}
