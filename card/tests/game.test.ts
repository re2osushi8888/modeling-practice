import { describe, expect, test } from 'bun:test';
import { Game } from '../src/game';

describe('Game', () => {
	describe('getWinner', () => {
		test.todo('ダメージが0だと両方勝っていない');
	});

	describe('ダメージを与えてライフを0にしたプレイヤーが勝利する', () => {
		test('れつがおおくらに攻撃', () => {
			const game = new Game('れつ', 'おおくら');
			game.attackToInactivePlayer(1);
			expect(game.getWinner()).toBe('れつ');
		});
		test('交代しておおくらがれつに攻撃', () => {
			const game = new Game('れつ', 'おおくら');
			game.turnChange();
			game.attackToInactivePlayer(1);
			expect(game.getWinner()).toBe('おおくら');
		});
	});

	test('アクティブプレイヤーの交代ができる', () => {
		const game = new Game('れつ', 'おおくら');
		game.turnChange();
		expect(game.isActivePlayer()).toBe('おおくら');
		game.turnChange();
		expect(game.isActivePlayer()).toBe('れつ');
	});
});
