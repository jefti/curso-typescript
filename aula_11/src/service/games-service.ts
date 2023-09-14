import httpStatus from "http-status";
import gamesRepository from "../repository/games-repository";
import { Game } from "./../protocols/game-protocol";

function getGames() {
  return gamesRepository.getGames();
}

async function createGame(game: Game) {
  if (gameAlreadyExists(game)) {
    throw { type:httpStatus.CONFLICT, message: "Game already exists" }
  }

  await gamesRepository.createGame(game);
}

function gameAlreadyExists(game: Game): boolean {
  const result = gamesRepository.getGameByTitleAndPlatform(game);
  return result ? true : false;
}

const gamesService = {
  getGames,
  createGame
}

export default gamesService;