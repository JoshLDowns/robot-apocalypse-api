module.exports = (router, app, authenticator) => {
  router.post("/register", authenticator.registerUser);
  router.post("/login", app.oauth.grant(), authenticator.login);
  router.get("/user", app.oauth.authorise(), authenticator.getUser);
  return router;
};
