import type { GameStatus } from '../src/game';

export const withPlayer1 =
	(name: string) =>
	(state: GameStatus): GameStatus => ({
		...state,
		player1: name,
	});

export const withPlayer2 =
	(name: string) =>
	(state: GameStatus): GameStatus => ({
		...state,
		player2: name,
	});

export const withActivePlayer =
	(name: string) =>
	(state: GameStatus): GameStatus => ({
		...state,
		activePlayer: name,
	});

export const withOpponentPlayer =
	(name: string) =>
	(state: GameStatus): GameStatus => ({
		...state,
		opponentPlayer: name,
	});
