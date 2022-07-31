const router = require("express").Router();

const { createUser, createLowMood, getLowMood, createAnxiousnessMood, getAnxiousnessMood, getSingleUser, saveMood, deleteMood, login } = require("../../controllers/user-controller");

const { authMiddleware } = require("../../utils/auth");

router.route("api/users").post(createUser).put(authMiddleware, saveMood).post(createLowMood).post(createAnxiousnessMood);

router.route("api/login").post(login);

router.route("api/me").get(authMiddleware, getSingleUser).get(getLowMood).get(getAnxiousnessMood);

router.route("api/mymood").get(getLowMood).get(getAnxiousnessMood);

router.route("api/moods/:moodId").delete(authMiddleware, deleteMood);

module.exports = router;
