const router = require("express").Router();
const { createUser, getSingleUser, saveMood, deleteMood, login } = require("../../controllers/user-controller");

// import middleware
const { authMiddleware } = require("../../utils/auth");

// put authMiddleware anywhere we need to send a token for verification of user
router.route("/").post(createUser).put(authMiddleware, saveMood);

router.route("/login").post(login);

router.route("/me").get(authMiddleware, getSingleUser);

router.route("/moods/:moodId").delete(authMiddleware, deleteMood);

module.exports = router;
