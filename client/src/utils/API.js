//get request for users/me
export const getMe = (token) => {
	return fetch("/api/users/me", {
		headers: {
			"Content-Type": "application/json",
			authorization: `Bearer ${token}`,
		},
	});
};
//get request for users/mymood
export const getMyMood = (token) => {
	return fetch("/api/users/mymood", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			authorization: `Bearer ${token}`,
		},
	});
};
//post request for creating a low mood
export const createLowMood = (userData) => {
	return fetch("/api/users", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(userData),
	});
};
//post request for creating an anxiousness mood
export const createAnxiousnessMood = (userData) => {
	return fetch("/api/users", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(userData),
	});
};
//post request for creating a new user
export const createUser = (userData) => {
	return fetch("/api/users", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(userData),
	});
};
//post request for creating a login
export const loginUser = (userData) => {
	return fetch("/api/users/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(userData),
	});
};
//put request for saving a mood
export const saveMood = (moodData, token) => {
	return fetch("/api/users", {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(moodData),
	});
};
//delete request for deleting a mood
export const deleteMood = (moodId, token) => {
	return fetch(`/api/users/moods/${moodId}`, {
		method: "DELETE",
		headers: {
			authorization: `Bearer ${token}`,
		},
	});
};
