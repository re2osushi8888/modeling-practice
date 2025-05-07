import { expect, test } from 'bun:test';
import { winner, type GameStatus } from '../src/game';

test('先攻が勝者になる', () => {
  const player1 = 'れつ'
  const player2 = 'おおくら'

  // TODO：ビルダーで書く
  const gameStatus: GameStatus = {
    player1: player1,
    player2: player2,
    activePlayer: player1,
    opponentPlayer: player2
  }

  expect(winner(gameStatus)).toBe(player1)
})
