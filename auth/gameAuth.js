let gameDB;

module.exports = (injectedGameDB) => {
  gameDB = injectedGameDB;

  return {
    insertNewGame: insertNewGame,
    getGame: getGame,
    insertRooms: insertRooms,
    getRooms: getRooms,
  };
};

function insertNewGame(req, res) {
  gameDB.newGame(
    req.body.userId,
    req.body.date,
    req.body.difficulty,
    (error, response) => {
      sendResponse(
        res,
        response.error === undefined ? response : "Something went wrong!",
        response.error
      );
    }
  );
}

function getGame(req, res) {
  gameDB.getGameByUser(req.query.userId, (error, response) => {
    sendResponse(
      res,
      response.error === undefined ? response : "Something went wrong!",
      response.error
    );
  });
}

function insertRooms(req, res) {
  console.log(req.body);
  gameDB.buildRooms(
    req.body.userId,
    req.body.gameId,
    req.body.difficulty,
    (error, response) => {
      sendResponse(
        res,
        response.error === undefined ? response : "Something went wrong!",
        response.error
      );
    }
  );
}

function getRooms(req, res) {
  gameDB.getRooms(req.query.gameId, (error, response) => {
    sendResponse(
      res,
      response.error === undefined ? response : "Something went wrong!",
      response.error
    );
  });
}

function sendResponse(res, message, error) {
  res.status(error !== undefined ? 400 : 200).json({
    message: message,
    error: error,
  });
}
