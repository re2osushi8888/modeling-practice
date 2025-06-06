import { Mana } from './mana';

export class Player {
	constructor(
		private name: string,
		private life = 1,
		private mana = new Mana(0),
		private hand: number[] = [1, 2, 3],
	) {}
	getHand(): Array<number> {
		return this.hand;
	}
	getName(): string {
		return this.name;
	}
	getLife(): number {
		return this.life;
	}
	getMana(): Mana {
		return this.mana;
	}
	takeDamage(damage: number): void {
		this.life -= damage;
	}
	draw() {
		this.hand.push(4);
	}
	useCard(card: number): void {
		const index = this.hand.indexOf(card);
		if (index === -1) return;

		this.hand.splice(index, 1);
	}
}
