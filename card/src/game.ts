import type { Player } from './player';

export class Game {
	constructor(
		private player1: Player,
		private player2: Player,
		private activePlayer: Player = player1,
	) {}

	getActivePlayer(): Player {
		return this.activePlayer;
	}

	turnChange(): void {
		if (this.activePlayer === this.player1) {
			this.activePlayer = this.player2;
		} else {
			this.activePlayer = this.player1;
		}
		this.activePlayer.manaCharge();
	}

	getWinner(): string | null {
		if (this.player1.getLife() <= 0) {
			return this.player2.getName();
		}
		if (this.player2.getLife() <= 0) {
			return this.player1.getName();
		}
		return null;
	}

	attackToInactivePlayer(cardMana: number): void {
		if (this.getActivePlayer() === this.player1) {
			this.player2.takeDamage(cardMana);
		} else {
			this.player1.takeDamage(cardMana);
		}
		this.getActivePlayer().reduceMana(cardMana);
	}
}
