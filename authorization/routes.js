const router = require("express").Router();

const AuthorizationController = require("./controllers/AuthorizationController");

const SchemaValidationMiddleware = require("../common/middlewares/SchemaValidationMiddleware");

const registerPayload = require("./schemas/registerPayload");
const loginPayload = require("./schemas/loginPayload");

router.post(
  "/signup",
  [SchemaValidationMiddleware.verify(registerPayload)],
  AuthorizationController.register
);

router.post(
  "/login",
  [SchemaValidationMiddleware.verify(loginPayload)],
  AuthorizationController.login
);

module.exports = router;
