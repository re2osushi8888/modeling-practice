import type { Player } from './player';

export class Game {
	constructor(
		private player1: Player,
		private player2: Player,
		private activePlayer: Player = player1,
	) {}
	start(): void {
		this.activePlayer.getMana().charge();
	}

	getActivePlayer(): Player {
		return this.activePlayer;
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

	turnEnd(): void {
		if (this.activePlayer === this.player1) {
			this.activePlayer = this.player2;
		} else {
			this.activePlayer = this.player1;
		}
	}
	turnStart(): void {
		this.activePlayer.draw();
		this.activePlayer.getMana().charge();
	}
	turnChange(): void {
		this.turnEnd();
		this.turnStart();
	}
	attackToInactivePlayer(card: number): void {
		if (this.getActivePlayer() === this.player1) {
			this.player2.takeDamage(card);
			this.player1.useCard(card);
		} else {
			this.player1.takeDamage(card);
			this.player2.useCard(card);
		}
		this.getActivePlayer().getMana().reduce(card);
	}
}
