module.exports = (router, app, authenticator, gameAuthenticator) => {
  router.post("/register", authenticator.registerUser);
  router.post("/login", app.oauth.grant(), authenticator.login);
  router.patch("/user/update", app.oauth.authorise(), authenticator.update)
  router.get("/user", app.oauth.authorise(), authenticator.getUser);
  router.post("/newgame", app.oauth.authorise(), gameAuthenticator.insertNewGame);
  router.get("/game", app.oauth.authorise(), gameAuthenticator.getGame)
  return router;
};
