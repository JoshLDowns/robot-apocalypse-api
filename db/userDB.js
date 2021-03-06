let pgPool;

module.exports = (injectedPgPool) => {
  pgPool = injectedPgPool;

  return {
    register: register,
    getUser: getUser,
    getUserInfo: getUserInfo,
    isValidUser: isValidUser,
    updateUser: updateUser
  };
};

var crypto = require("crypto");

function register(username, password, cbFunc) {
  var shaPass = crypto.createHash("sha256").update(password).digest("hex");

  const query = `INSERT INTO users (username, user_password, top_score, active_game) VALUES ('${username}', '${shaPass}', '0', false)`;

  pgPool.query(query, cbFunc);
}

function getUser(username, password, cbFunc) {
  var shaPass = crypto.createHash("sha256").update(password).digest("hex");

  const getUserQuery = `SELECT * FROM users WHERE username = '${username}' AND user_password = '${shaPass}'`;

  pgPool.query(getUserQuery, (response) => {
    cbFunc(
      false,
      response.results && response.results.rowCount === 1
        ? response.results.rows[0]
        : null
    );
  });
}

function getUserInfo(token, cbFunc) {
  const getUserQuery = `SELECT * FROM users WHERE id = (SELECT user_id FROM access_tokens WHERE access_token = '${token}');`;

  pgPool.query(getUserQuery, (response) => {
    cbFunc(
      false,
      response.results && response.results.rowCount === 1
        ? response.results.rows[0]
        : null
    );
  });
}

function isValidUser(username, cbFunc) {
  const query = `SELECT * FROM users WHERE username = '${username}'`;

  const checkUsrcbFunc = (response) => {
    const isValidUser = response.results
      ? !(response.results.rowCount > 0)
      : null;

    cbFunc(response.error, isValidUser);
  };

  pgPool.query(query, checkUsrcbFunc);
}

function updateUser(id, field, value, cbFunc) {
  const updateQuery = `UPDATE users SET ${field} = ${value} WHERE id = ${id}`

  pgPool.query(updateQuery, cbFunc)
}
