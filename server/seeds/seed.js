const db = require("../config/connection");
const { User } = require("../models");

db.once("open", async () => {
	await User.deleteMany();

	await User.create({
		username: "Sal",
		email: "sal@gmail.com",
		password: "abcd123",
		savedMoods: [
			{
				date: "2022-08-03",
				moodId: "62ea15305e390f10b29080cb",
				type: "anxious",
				value: 2,
			},
			{
				date: "2022-08-03",
				moodId: "62ea17645e390f10b29080dd",
				type: "low",
				value: 3,
			},
			{
				date: "2022-08-03",
				moodId: "62ea558c1becc1c0f75de631",
				type: "anxious",
				value: 3,
			},
			{
				date: "2022-08-03",
				moodId: "62ea558d1becc1c0f75de634",
				type: "low",
				value: 1,
			},
			{
				date: "2022-08-02",
				moodId: "62ea15625e390f10b29080cf",
				type: "low",
				value: 2,
			},
			{
				date: "2022-08-02",
				moodId: "62ea19645e390f10b29080e1",
				type: "anxious",
				value: 1,
			},
			{
				date: "2022-08-02",
				moodId: "62ea558e1becc1c0f75de637",
				type: "low",
				value: 2,
			},
			{
				date: "2022-08-02",
				moodId: "62ea55901becc1c0f75de63a",
				type: "anxious",
				value: 1,
			},
			{
				date: "2022-08-01",
				moodId: "62ea159f5e390f10b29080d2",
				type: "anxious",
				value: 2,
			},
			{
				date: "2022-08-01",
				moodId: "62ea21dc8a2b4ece15a408d6",
				type: "low",
				value: 3,
			},
			{
				date: "2022-08-01",
				moodId: "62ea55921becc1c0f75de63d",
				type: "anxious",
				value: 2,
			},
			{
				date: "2022-08-01",
				moodId: "62ea55931becc1c0f75de640",
				type: "low",
				value: 3,
			},
			{
				date: "2022-07-29",
				moodId: "62ea16495e390f10b29080d6",
				type: "low",
				value: 1,
			},
			{
				date: "2022-07-29",
				moodId: "62ea3c0ab3d4294be8f3b45e",
				type: "anxious",
				value: 1,
			},
			{
				date: "2022-07-29",
				moodId: "62ea55941becc1c0f75de643",
				type: "low",
				value: 1,
			},
			{
				date: "2022-07-29",
				moodId: "62ea55951becc1c0f75de646",
				type: "anxious",
				value: 1,
			},
			{
				date: "2022-07-28",
				moodId: "62ea16645e390f10b29080d9",
				type: "anxious",
				value: 3,
			},
			{
				date: "2022-07-28",
				moodId: "62ea5504945a2e962def10ee",
				type: "low",
				value: 2,
			},
			{
				date: "2022-07-28",
				moodId: "62ea55971becc1c0f75de649",
				type: "anxious",
				value: 3,
			},
			{
				date: "2022-07-28",
				moodId: "62ea55981becc1c0f75de64c",
				type: "low",
				value: 2,
			},
		],
	});

	await User.create({
		username: "Tom",
		email: "tom@gmail.com",
		password: "abcd123",
		savedMoods: [
			{
				date: "2022-08-03",
				moodId: "62ea15305e390f10b29080cb",
				type: "anxious",
				value: 2,
			},
			{
				date: "2022-08-03",
				moodId: "62ea17645e390f10b29080dd",
				type: "low",
				value: 3,
			},
			{
				date: "2022-08-03",
				moodId: "62ea558c1becc1c0f75de631",
				type: "anxious",
				value: 3,
			},
			{
				date: "2022-08-03",
				moodId: "62ea558d1becc1c0f75de634",
				type: "low",
				value: 1,
			},
			{
				date: "2022-08-02",
				moodId: "62ea15625e390f10b29080cf",
				type: "low",
				value: 2,
			},
			{
				date: "2022-08-02",
				moodId: "62ea19645e390f10b29080e1",
				type: "anxious",
				value: 1,
			},
			{
				date: "2022-08-02",
				moodId: "62ea558e1becc1c0f75de637",
				type: "low",
				value: 2,
			},
			{
				date: "2022-08-02",
				moodId: "62ea55901becc1c0f75de63a",
				type: "anxious",
				value: 1,
			},
			{
				date: "2022-08-01",
				moodId: "62ea159f5e390f10b29080d2",
				type: "anxious",
				value: 2,
			},
			{
				date: "2022-08-01",
				moodId: "62ea21dc8a2b4ece15a408d6",
				type: "low",
				value: 3,
			},
			{
				date: "2022-08-01",
				moodId: "62ea55921becc1c0f75de63d",
				type: "anxious",
				value: 2,
			},
			{
				date: "2022-08-01",
				moodId: "62ea55931becc1c0f75de640",
				type: "low",
				value: 3,
			},
			{
				date: "2022-07-29",
				moodId: "62ea16495e390f10b29080d6",
				type: "low",
				value: 1,
			},
			{
				date: "2022-07-29",
				moodId: "62ea3c0ab3d4294be8f3b45e",
				type: "anxious",
				value: 1,
			},
			{
				date: "2022-07-29",
				moodId: "62ea55941becc1c0f75de643",
				type: "low",
				value: 1,
			},
			{
				date: "2022-07-29",
				moodId: "62ea55951becc1c0f75de646",
				type: "anxious",
				value: 1,
			},
			{
				date: "2022-07-28",
				moodId: "62ea16645e390f10b29080d9",
				type: "anxious",
				value: 3,
			},
			{
				date: "2022-07-28",
				moodId: "62ea5504945a2e962def10ee",
				type: "low",
				value: 2,
			},
			{
				date: "2022-07-28",
				moodId: "62ea55971becc1c0f75de649",
				type: "anxious",
				value: 3,
			},
			{
				date: "2022-07-28",
				moodId: "62ea55981becc1c0f75de64c",
				type: "low",
				value: 2,
			},
		],
	});

	await User.create({
		username: "Henry",
		email: "hen@gmail.com",
		password: "abcd123",
		savedMoods: [
			{
				date: "2022-08-03",
				moodId: "62ea15305e390f10b29080cb",
				type: "anxious",
				value: 2,
			},
			{
				date: "2022-08-03",
				moodId: "62ea17645e390f10b29080dd",
				type: "low",
				value: 3,
			},
			{
				date: "2022-08-03",
				moodId: "62ea558c1becc1c0f75de631",
				type: "anxious",
				value: 3,
			},
			{
				date: "2022-08-03",
				moodId: "62ea558d1becc1c0f75de634",
				type: "low",
				value: 1,
			},
			{
				date: "2022-08-02",
				moodId: "62ea15625e390f10b29080cf",
				type: "low",
				value: 2,
			},
			{
				date: "2022-08-02",
				moodId: "62ea19645e390f10b29080e1",
				type: "anxious",
				value: 1,
			},
			{
				date: "2022-08-02",
				moodId: "62ea558e1becc1c0f75de637",
				type: "low",
				value: 2,
			},
			{
				date: "2022-08-02",
				moodId: "62ea55901becc1c0f75de63a",
				type: "anxious",
				value: 1,
			},
			{
				date: "2022-08-01",
				moodId: "62ea159f5e390f10b29080d2",
				type: "anxious",
				value: 2,
			},
			{
				date: "2022-08-01",
				moodId: "62ea21dc8a2b4ece15a408d6",
				type: "low",
				value: 3,
			},
			{
				date: "2022-08-01",
				moodId: "62ea55921becc1c0f75de63d",
				type: "anxious",
				value: 2,
			},
			{
				date: "2022-08-01",
				moodId: "62ea55931becc1c0f75de640",
				type: "low",
				value: 3,
			},
			{
				date: "2022-07-29",
				moodId: "62ea16495e390f10b29080d6",
				type: "low",
				value: 1,
			},
			{
				date: "2022-07-29",
				moodId: "62ea3c0ab3d4294be8f3b45e",
				type: "anxious",
				value: 1,
			},
			{
				date: "2022-07-29",
				moodId: "62ea55941becc1c0f75de643",
				type: "low",
				value: 1,
			},
			{
				date: "2022-07-29",
				moodId: "62ea55951becc1c0f75de646",
				type: "anxious",
				value: 1,
			},
			{
				date: "2022-07-28",
				moodId: "62ea16645e390f10b29080d9",
				type: "anxious",
				value: 3,
			},
			{
				date: "2022-07-28",
				moodId: "62ea5504945a2e962def10ee",
				type: "low",
				value: 2,
			},
			{
				date: "2022-07-28",
				moodId: "62ea55971becc1c0f75de649",
				type: "anxious",
				value: 3,
			},
			{
				date: "2022-07-28",
				moodId: "62ea55981becc1c0f75de64c",
				type: "low",
				value: 2,
			},
		],
	});
	console.log("User added");
	console.log("Mood added");
	process.exit(0);
});
