export class Player {
	constructor(
		public name: string,
		public life = 1,
		private mana = 0,
	) {}
	manaCharge(): void {
		this.mana += 1;
	}
	getMana(): number {
		return this.mana;
	}
}
