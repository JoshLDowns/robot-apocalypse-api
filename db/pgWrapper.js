const Pool = require("pg").Pool;

const query = (queryString, cbFunc) => {
  const pool = new Pool({
    user: "joshuadowns",
    host: "localhost",
    database: "robots",
    password: "",
    port: 5432,
  });

  pool.query(queryString, (error, results) => {
    cbFunc(setResponse(error, results));
  });
};

function setResponse(error, results) {
  return {
    error: error,
    results: results ? results : null,
  };
};

module.exports = {
  query: query,
};
