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
		this.capacity = this.calc_capacity();
		this.available = this.capacity;
	}
	private calc_capacity() {
		if (this.LIMIT <= this.capacity) {
			return this.LIMIT;
		}
		return this.capacity + 1;
	}
	reduce(cardMana: number) {
		this.available -= cardMana;
	}
}
