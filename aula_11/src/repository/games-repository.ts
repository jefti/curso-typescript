import { Game } from "../protocols/game-protocol";
import { connection } from "../database/database";

const games: Game[] = [];

function getGames() {
  return games;
}

async function createGame(game: Game) {
  await connection.query(`INSERT INTO games(title, platform) VALUES ($1,$2)`,[game.title,game.platform]);
}

async function getGameByTitleAndPlatform(game: Game) {
  const result = await connection.query<Game>(`SELECT title,platform FROM games WHERE title = $1 && platform = $2;`,[game.title, game.platform]);
  const games = result.rows;
  return games;
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame
}

export default gamesRepository;