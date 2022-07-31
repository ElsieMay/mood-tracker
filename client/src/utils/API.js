export const getMe = (token) => {
	return fetch("/api/users/me", {
		headers: {
			"Content-Type": "application/json",
			authorization: `Bearer ${token}`,
		},
	});
};

export const getMyMood = (token) => {
	return fetch("/api/users/mymood", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			authorization: `Bearer ${token}`,
		},
	});
};

export const createLowMood = (userData) => {
	return fetch("/api/users", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(userData),
	});
};

export const createAnxiousnessMood = (userData) => {
	return fetch("/api/users", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(userData),
	});
};

export const createUser = (userData) => {
	return fetch("/api/users", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(userData),
	});
};

export const loginUser = (userData) => {
	return fetch("/api/users/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(userData),
	});
};

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

export const deleteMood = (moodId, token) => {
	return fetch(`/api/users/moods/${moodId}`, {
		method: "DELETE",
		headers: {
			authorization: `Bearer ${token}`,
		},
	});
};
