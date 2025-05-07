import { expect, test } from 'bun:test';
import { winner, type GameStatus } from '../src/game';

test('ゲームの勝者が決まる', () => {
  const gameStatus: GameStatus = {
    player1: 'れつ',
    player2: 'おおくら'
  }

  expect(winner(gameStatus)).toBe('れつ')
})
