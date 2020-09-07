const format = require("pg-format");
const initializer = require("../gameFunctions/initializer")
let pgPool;

module.exports = (injectedPgPool) => {
  pgPool = injectedPgPool;

  return {
    newGame: newGame,
    getGameByUser: getGameByUser
  }
}

function newGame(id, dateString, difficulty, cbFunc) {
  const insertQuery = `INSERT INTO games (user_id, start_date, seconds_played, score, current_room, difficulty, active) VALUES (${id}, '${dateString}', 0, 0, 'fallout_bunker', '${difficulty}', true) RETURNING *`
  
  pgPool.query(insertQuery, (response) => {
    cbFunc(
      false,
      response.results && response.results.rowCount === 1
        ? response.results.rows[0]
        : null
    );
  });
}

function getGameByUser(id, cbFunc) {
  const gameQuery = `SELECT * FROM games WHERE user_id = ${id}`

  pgPool.query(gameQuery, (response) => {
    cbFunc(
      false,
      response.results && response.results.rowCount === 1
        ? response.results.rows[0]
        : null
    );
  });
}