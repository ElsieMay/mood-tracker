export const getSavedMoodIds = () => {
	const savedMoodIds = localStorage.getItem("saved_moods") ? JSON.parse(localStorage.getItem("saved_moods")) : [];

	return savedMoodIds;
};

export const saveMoodIds = (moodIdArr) => {
	if (moodIdArr.length) {
		localStorage.setItem("saved_moods", JSON.stringify(moodIdArr));
	} else {
		localStorage.removeItem("saved_moods");
	}
};

export const deleteMoodId = (moodId) => {
	const savedMoodIds = localStorage.getItem("saved_moods") ? JSON.parse(localStorage.getItem("saved_moods")) : null;

	if (!savedMoodIds) {
		return false;
	}

	const updatedSavedMoodIds = savedMoodIds?.filter((savedMoodId) => savedMoodId !== moodId);
	localStorage.setItem("saved_moods", JSON.stringify(updatedSavedMoodIds));

	return true;
};
