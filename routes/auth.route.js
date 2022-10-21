const express = require("express");
const authController = require("../controller/auth.controller");
const authorization = require("../middleware/authorization");

const { verifyToken } = require("../middleware/verifyToken");

const router = express.Router();

router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);

router.get("/me", verifyToken, authController.getMe);
router
  .route("/candidate/:id")
  .patch(
    verifyToken,
    authorization("admin"),
    authController.updateCandidateRole
  );

router
  .route("/:role/:id")
  .get(verifyToken, authorization("admin"), authController.getUserDetailsById);

router
  .route("/:role")
  .get(verifyToken, authorization("admin"), authController.getUsers);

module.exports = router;
