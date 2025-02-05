import { describe, expect, test } from 'bun:test';
import { Game } from '../src/game';
import { Player } from '../src/player';

describe('Game', () => {
	describe('getWinner', () => {
		test.todo('ダメージが0だと両方勝っていない');
	});

	describe('ダメージを与えてライフを0にしたプレイヤーが勝利する', () => {
		test('れつがおおくらに攻撃', () => {
			const retsu = new Player('れつ');
			const okura = new Player('おおくら');
			const game = new Game(retsu, okura);
			game.attackToInactivePlayer(1);
			expect(game.getWinner()).toBe('れつ');
		});
		test('交代しておおくらがれつに攻撃', () => {
			const retsu = new Player('れつ');
			const okura = new Player('おおくら');
			const game = new Game(retsu, okura);
			game.turnChange();
			game.attackToInactivePlayer(1);
			expect(game.getWinner()).toBe('おおくら');
		});
	});

	test('アクティブプレイヤーの交代ができる', () => {
		const retsu = new Player('れつ');
		const okura = new Player('おおくら');
		const game = new Game(retsu, okura);
		game.turnChange();
		expect(game.getActivePlayer()).toBe(okura);
		game.turnChange();
		expect(game.getActivePlayer()).toBe(retsu);
	});
});

describe('Player', () => {
	describe('マナ', () => {
		test('最初のプレイヤーはマナが1チャージされている', () => {
			const retsu = new Player('れつ');
			const okura = new Player('おおくら');
			const game = new Game(retsu, okura);
			expect(game.getActivePlayer().getMana()).toBe(1);
		});
		test('21ターン目に最初のプレイヤーの初期マナが10', () => {
			const retsu = new Player('れつ');
			const okura = new Player('おおくら');
			const game = new Game(retsu, okura);
			for (let i = 1; i < 21; i++) {
				game.turnChange();
			}
			// 最初のプレイヤーに戻っていることを確認
			expect(game.getActivePlayer()).toBe(retsu);
			expect(game.getActivePlayer().getMana()).toBe(10);
		});
		test.todo('マナを消費してカードがプレイできる');
		test.todo('マナがターン開始時に上限値までチャージされる');
		test.todo('マナがターン開始時に上限値が1増える');
	});
});

describe('デッキ', () => {
	test.todo('ターン開始時に1枚のカードがドローができる');
});
describe('手札', () => {
	test.todo('ドローすると手札が1枚増える');
	test.todo('ゲーム開始時にカードが3枚補充される');
	test.todo('カードをプレイすると手札がプレイしたカードが手札からなくなる');
});
describe('ターン交代', () => {
	test.todo('カードをプレイできない場合、自動的に相手のターンに切り替わる');
});
