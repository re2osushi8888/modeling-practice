export class Player {
	constructor(
		private name: string,
		private life = 1,
		private mana = 0,
	) {}
	manaCharge(): void {
		this.mana += 1;
	}
	takeDamage(damage: number): void {
		this.life -= damage;
	}
	getMana(): number {
		return this.mana;
	}
	getName(): string {
		return this.name;
	}
	getLife(): number {
		return this.life;
	}
}
