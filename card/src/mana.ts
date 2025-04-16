export class Mana {
	private LIMIT = 10;

	constructor(
		private capacity = 0,
		private available = capacity,
	) {}
	getCapacity(): number {
		return this.capacity;
	}
	getAvailable(): number {
		return this.available;
	}
	charge() {
		if (this.LIMIT <= this.capacity) {
			this.capacity = this.LIMIT;
			return;
		}
		this.capacity += 1;
		this.available = this.capacity;
	}
	reduce(cardMana: number) {
		this.available -= cardMana;
	}
}
