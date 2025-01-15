import { describe, expect, test } from 'bun:test';
import { Game } from '../src/game';

describe('Game', () => {
	test('ゲームが勝者を判定できる', () => {
		const game = new Game('れつ', 'おおくら');
		expect(game.getWinner()).toBe('れつ');
	});

	test('ダメージを与えてライフを0にしたプレイヤーが勝利する', () => {
		const game = new Game('れつ', 'おおくら');
		game.attackToInactivePlayer(1);
		expect(game.getWinner()).toBe('れつ');
	});

	test.todo('アクティブプレイヤーの交代ができる');
});
