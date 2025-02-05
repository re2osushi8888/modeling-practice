export class Player {
	private MAX_MANA = 10;

	constructor(
		private name: string,
		private life = 1,
		private mana = 0,
	) {}
	manaCharge() {
		if (this.MAX_MANA <= this.mana) {
			this.mana = this.MAX_MANA;
			return;
		}
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
	reduceMana(cardMana: number) {
		this.mana -= cardMana;
	}
}
