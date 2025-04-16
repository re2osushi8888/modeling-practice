import { describe, expect, test } from 'bun:test';
import { Mana } from '../src/mana';

describe('Mana', () => {
	describe('charge', () => {
		test('上限値に到達していた場合は上限までチャージされる', () => {
			const mana = new Mana(11, 0);

			mana.charge();　

			expect(mana.getCapacity()).toBe(10);
			expect(mana.getAvailable()).toBe(10);
		});
	});
});
