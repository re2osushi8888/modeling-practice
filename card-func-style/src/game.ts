export type GameStatus = {
  player1: string,
  player2: string,
  activePlayer: string,
  opponentPlayer: string
}

export const winner = (game: GameStatus) => {
  return game.activePlayer
}
