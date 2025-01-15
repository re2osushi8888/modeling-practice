export class Game {
	constructor(
		private player1: string,
		private player2: string,
	) {}

	getWinner(): string {
		return this.player1;
	}

	attackToInactivePlayer(damage: number): void {}
}
