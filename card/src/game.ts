import type { Player } from './player';

export class Game {
	isActivePlayer(): string {
		return this.activePlayer.name;
	}

	turnChange(): void {
		if (this.activePlayer === this.player1) {
			this.activePlayer = this.player2;
		} else {
			this.activePlayer = this.player1;
		}
	}

	constructor(
		private player1: Player,
		private player2: Player,
		private activePlayer: Player = player1,
	) {}

	getWinner(): string | null {
		if (this.player1.life <= 0) {
			return this.player2.name;
		}
		if (this.player2.life <= 0) {
			return this.player1.name;
		}
		return null;
	}

	attackToInactivePlayer(damage: number): void {
		if (this.isActivePlayer() === this.player1.name) {
			this.player2.life -= damage;
		} else {
			this.player1.life -= damage;
		}
	}
}
