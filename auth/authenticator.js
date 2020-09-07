let userDB;

module.exports = (injectedUserDB) => {
  userDB = injectedUserDB;

  return {
    registerUser: registerUser,
    login: login,
    getUser: getUser,
    update: update,
  };
};

function registerUser(req, res) {
  userDB.isValidUser(req.body.username, (error, isValidUser) => {
    if (error || !isValidUser) {
      const message = error
        ? "Something went wrong!"
        : "This user already exists!";

      sendResponse(res, message, error);

      return;
    }

    userDB.register(req.body.username, req.body.password, (response) => {
      sendResponse(
        res,
        response.error === undefined ? "ok" : "Something went wrong!",
        response.error
      );
    });
  });
}

function getUser(req, res) {
  userDB.getUserInfo(req.headers.authorization.split(" ")[1], (error, response) => {
    sendResponse(
      res,
      response.error === undefined ? response : "Something went wrong!",
      response.error
    );
  });
}

function login(query, res) {}

function update(req, res) {
  userDB.updateUser(req.body.id, req.body.field, req.body.value, (response) => {
    sendResponse(
      res,
      response.error === undefined ? "ok" : "Something went wrong!",
      response.error
    );
  })
}

function sendResponse(res, message, error) {

  res.status(error !== undefined ? 400 : 200).json({
    message: message,
    error: error,
  });
}
