export class Mana {
	private MANA_LIMIT = 10;

	constructor(
		private maxMana = 0,
		private remainedMana = maxMana,
	) {}
	getMaxMana(): number {
		return this.maxMana;
	}
	getRemainedMana(): number {
		return this.remainedMana;
	}
	charge() {
		if (this.MANA_LIMIT <= this.maxMana) {
			this.maxMana = this.MANA_LIMIT;
			return;
		}
		this.maxMana += 1;
	}
	reduce(cardMana: number) {
		this.remainedMana -= cardMana;
	}
}
