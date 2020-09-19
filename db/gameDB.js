const format = require("pg-format");
const initializer = require("../gameFunctions/initializer");
let pgPool;

module.exports = (injectedPgPool) => {
  pgPool = injectedPgPool;

  return {
    newGame: newGame,
    getGameByUser: getGameByUser,
    buildRooms: buildRooms,
    getRooms: getRooms
  };
};

function newGame(id, dateString, difficulty, cbFunc) {
  const insertQuery = `INSERT INTO games (user_id, start_date, seconds_played, score, current_room, difficulty, active) VALUES (${id}, '${dateString}', 0, 0, 'falloutBunker', '${difficulty}', true) RETURNING *`;

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
  const gameQuery = `SELECT * FROM games WHERE user_id = ${id}`;

  pgPool.query(gameQuery, (response) => {
    cbFunc(
      false,
      response.results && response.results.rowCount === 1
        ? response.results.rows[0]
        : null
    );
  });
}

function buildRooms(userId, gameId, difficulty, cbFunc) {
  let rooms = initializer.generateRooms(userId, gameId, difficulty)
  let query = format("INSERT INTO rooms (user_id, game_id, name, info, inventory, enemy, north, south, east, west, up, down, keycard, map, intobject, intobject_inventory, secret, random_enemy, entered, room_id) VALUES %L returning *", rooms);
  pgPool.query(query, (response) => {
    cbFunc(
      false,
      response.results && response.results.rowCount > 1
        ? response.results.rows
        : null
    );
  });
}

function getRooms(id, cbFunc) {
  let roomQuery = `SELECT * FROM rooms WHERE game_id = ${id}`;

  pgPool.query(roomQuery, (response) => {
    cbFunc(
      false,
      response.results && response.results.rowCount > 0
        ? response.results.rows
        : null
    );
  });
}
