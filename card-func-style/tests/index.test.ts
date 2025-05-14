import { expect, test } from 'bun:test';
import { type GameStatus, winner } from '../src/game';
import { withActivePlayer } from './gameBuilder';

const defaultGameStatus: GameStatus = {
	player1: 'samplePlayer1',
	player2: 'samplePlayer2',
	activePlayer: 'samplePlayer1',
	opponentPlayer: 'samplePlayer2',
};

test('先攻が勝者になる', () => {
	const player = 'れつ';
	const gameStatus = [withActivePlayer(player)].reduce(
		(state, fn) => fn(state),
		defaultGameStatus,
	);

	expect(winner(gameStatus)).toBe(player);
});
