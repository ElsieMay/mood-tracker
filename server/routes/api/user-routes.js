const router = require("express").Router();

const { createUser, getMood, getSingleUser, saveMood, deleteMood, login } = require("../../controllers/user-controller");

const { authMiddleware } = require("../../utils/auth");

router.route("api/users").post(createUser).put(authMiddleware, saveMood);

router.route("api/login").post(login);

router.route("api/me").get(authMiddleware, getSingleUser);

router.route("api/mymood").get(authMiddleware, getMood);

router.route("api/moods/:moodId").delete(authMiddleware, deleteMood);

module.exports = router;
