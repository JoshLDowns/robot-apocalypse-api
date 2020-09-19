module.exports = (router, app, authenticator, gameAuthenticator) => {
  router.get("/user", app.oauth.authorise(), authenticator.getUser);
  router.get("/game", app.oauth.authorise(), gameAuthenticator.getGame);
  router.get("/rooms", app.oauth.authorise(), gameAuthenticator.getRooms);
  router.post("/register", authenticator.registerUser);
  router.post("/login", app.oauth.grant(), authenticator.login);
  router.post(
    "/newgame",
    app.oauth.authorise(),
    gameAuthenticator.insertNewGame
  );
  router.post("/rooms/new", app.oauth.authorise(), gameAuthenticator.insertRooms);
  router.patch("/user/update", app.oauth.authorise(), authenticator.update);
  return router;
};
