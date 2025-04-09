import { describe, expect, test } from 'bun:test';
import { Game } from '../src/game';
import { Mana } from '../src/mana';
import { Player } from '../src/player';

describe('Game', () => {
	describe('開始', () => {
		test.todo('開始せずにはいかなるメソッドも呼び出せない');
		test('先攻プレイヤーの手札は3枚からスタートする', () => {
			// TODO Playerオブジェクトはミュータブルで今後プログラムが拡張されるとバグを埋め込む可能性があるため、どこかでイミュータブルにしたい
			const retsu = new Player('れつ');
			const okura = new Player('おおくら');
			const game = new Game(retsu, okura);

			game.start();
			expect(game.getActivePlayer().getHand().length).toBe(3);
		});
		test('後攻プレイヤーの手札は3枚からスタートする', () => {
			const retsu = new Player('れつ');
			const okura = new Player('おおくら');
			const game = new Game(retsu, okura);

			game.start();
			expect(okura.getHand().length).toBe(3);
		});
		test.todo('開始時のマナのテスト考える');
		test.todo('開始時のライフのテスト考える');
	});
	describe('攻撃', () => {
		describe('ライフ', () => {
			test('先攻が攻撃したら後攻のライフが減る', () => {
				const retsu = new Player('れつ', 2);
				const okura = new Player('おおくら', 2);
				const game = new Game(retsu, okura);
				game.attackToInactivePlayer(1);

				expect(game.getInActivePlayer().getLife()).toBe(1);
			});
			test('後攻が攻撃したら先攻のライフが減る', () => {
				const retsu = new Player('れつ', 2);
				const okura = new Player('おおくら', 2);
				const game = new Game(retsu, okura);
				game.turnChange();
				game.attackToInactivePlayer(1);

				expect(game.getInActivePlayer().getLife()).toBe(1);
			});
		});

		test('マナが減る系のテスト考える', () => {
			expect(true).toBe(false);
		});
		test.todo('手札が減る系のテスト考える');
	});
	describe('交代', () => {
		test('アクティブプレイヤーの交代ができる', () => {
			const retsu = new Player('れつ');
			const okura = new Player('おおくら');
			const game = new Game(retsu, okura);
			game.turnChange();
			expect(game.getActivePlayer()).toBe(okura);
			game.turnChange();
			expect(game.getActivePlayer()).toBe(retsu);
		});
		test('後攻プレイヤーは1ターン目に手札が4枚', () => {
			const retsu = new Player('れつ');
			const okura = new Player('おおくら');
			const game = new Game(retsu, okura);

			game.start();
			game.turnChange();
			expect(game.getActivePlayer().getHand().length).toBe(4);
		});
		test.todo('交代したらマナが増える');
		test.todo('交代したら手札が増える');
	});
	describe('勝利条件', () => {
		test('ダメージが0だと両方勝っていない', () => {
			const retsu = new Player('れつ', 1);
			const okura = new Player('おおくら', 1);
			const game = new Game(retsu, okura);
			expect(game.getWinner()).toBe(null);
		});
		test('後攻プレイヤーのライフが0なら先攻プレイヤーの勝利', () => {
			const retsu = new Player('れつ');
			const okura = new Player('おおくら', 0);
			const game = new Game(retsu, okura);
			expect(game.getWinner()).toBe('れつ');
		});
		test('先攻プレイヤーのライフが0なら後攻プレイヤーの勝利', () => {
			const retsu = new Player('れつ', 0);
			const okura = new Player('おおくら');
			const game = new Game(retsu, okura);
			expect(game.getWinner()).toBe('おおくら');
		});
	});
});

describe('Player', () => {
	describe('マナ', () => {
		describe('チャージ', () => {
			test('1ターン目の先攻プレイヤーはマナが1', () => {
				const retsu = new Player('れつ');
				const okura = new Player('おおくら');
				const game = new Game(retsu, okura);
				game.start();
				expect(game.getActivePlayer().getMana().getCapacity()).toBe(1);
			});
			test('1ターン目の後攻プレイヤーはマナが1', () => {
				const retsu = new Player('れつ');
				const okura = new Player('おおくら');
				const game = new Game(retsu, okura);
				game.start();
				game.turnChange();
				expect(game.getActivePlayer().getMana().getCapacity()).toBe(1);
			});
			test('11ターン目に先攻プレイヤーの初期マナが10', () => {
				const retsu = new Player('れつ', 1, new Mana(1));
				const okura = new Player('おおくら');
				const game = new Game(retsu, okura);
				// FIXME：forループわかりにくい
				for (let i = 1; i < 21; i++) {
					game.turnChange();
				}
				// 最初のプレイヤーに戻っていることを確認
				expect(game.getActivePlayer()).toBe(retsu);
				expect(game.getActivePlayer().getMana().getCapacity()).toBe(10);
			});
		});
		describe('消費', () => {
			test('5マナ持っている状態で3マナのカードを使用した場合→所持マナが2になる', () => {
				const retsu = new Player('れつ', 5, new Mana(5));
				const okura = new Player('おおくら', 5, new Mana(5));
				const game = new Game(retsu, okura);

				// FIXME: game.start()してない
				game.attackToInactivePlayer(3);
				expect(game.getActivePlayer().getMana().getAvailable()).toBe(2);
			});
		});
		test('先攻プレイヤーが1ターン目にカードを使い、2ターン目に所持マナが2', () => {
			const retsu = new Player('れつ');
			const okura = new Player('おおくら');
			const game = new Game(retsu, okura);
			game.start();

			game.attackToInactivePlayer(1);
			// FIXME: turnChangeいっぱいあるとわかりづらい
			game.turnChange();
			game.turnChange();
			expect(game.getActivePlayer().getMana().getCapacity()).toBe(2);
		});
		test.todo('マナがターン開始時に上限値までチャージされる');
		test.todo('マナがターン開始時に上限値が1増える');
		test.todo('自分の持っているマナより大きい数のカードは使用できない');
	});
	describe('手札', () => {
		describe('手札に1枚しかないカードをプレイする場合', () => {
			test('プレイしたカードが手札からなくなる', () => {
				const retsu = new Player(
					'れつ',
					undefined,
					undefined,
					[1, 2, 3, 4, 5, 5],
				);
				retsu.useCard(1);
				expect(retsu.getHand()).toEqual([2, 3, 4, 5, 5]);
			});
			test.todo('マナが0');
			test.todo('後攻のライフが1減る');
		});
		describe('手札に重複するカードがある場合', () => {
			test('プレイしたカードが手札からなくなる', () => {
				const retsu = new Player(
					'れつ',
					undefined,
					undefined,
					[1, 2, 3, 4, 5, 5],
				);
				retsu.useCard(5);
				expect(retsu.getHand()).toEqual([1, 2, 3, 4, 5]);
			});
		});
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
