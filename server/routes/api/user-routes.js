const router = require("express").Router();
const { createUser, getSingleUser, saveMood, deleteMood, login } = require("../../controllers/user-controller");

const { authMiddleware } = require("../../utils/auth");

router.route("api/").post(createUser).put(authMiddleware, saveMood);

router.route("api/login").post(login);

router.route("api/me").get(authMiddleware, getSingleUser);

router.route("api/moods/:moodId").delete(authMiddleware, deleteMood);

module.exports = router;
