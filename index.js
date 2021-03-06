// Database imports
const pgPool = require("./db/pgWrapper");
const tokenDB = require("./db/tokenDB")(pgPool);
const userDB = require("./db/userDB")(pgPool);
const gameDB = require("./db/gameDB")(pgPool);

// OAuth imports
const oAuthService = require("./auth/tokenService")(userDB, tokenDB);
const oAuth2Server = require("node-oauth2-server");

// Express
const express = require("express");
const app = express();
app.oauth = oAuth2Server({
  model: oAuthService,
  grants: ["password"],
  debug: true,
});

//Logging
const morgan = require("morgan")
const logger = morgan(':method :url :status :res[content-length] - :response-time ms');

const testAPIService = require("./test/testAPIService.js");
const testAPIRoutes = require("./test/testAPIRoutes.js")(
  express.Router(),
  app,
  testAPIService
);

// Auth and routes
const authenticator = require("./auth/authenticator")(userDB);
const gameAuthenticator = require("./auth/gameAuth")(gameDB);
const routes = require("./auth/routes")(express.Router(), app, authenticator, gameAuthenticator);
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(app.oauth.errorHandler());
app.use(logger);
app.use("/auth", routes);
app.use("/test", testAPIRoutes);

const port = 4000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
