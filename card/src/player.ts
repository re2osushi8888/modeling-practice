import { Mana } from './mana';

export class Player {
	constructor(
		private name: string,
		private life = 1,
		private mana = new Mana(0),
	) {}
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
}
