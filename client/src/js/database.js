import { openDB } from "idb";

const initdb = async () =>
	openDB("mood", 1, {
		upgrade(db) {
			if (db.objectStoreNames.contains("mood")) {
				console.log("mood database already exists");
				return;
			}
			db.createObjectStore("mood", { keyPath: "id", autoIncrement: true });
			console.log("mood database created");
		},
	});

// Export a function we will use to POST to the database.
export const putDb = async (content) => {
	console.log("Post to the database");

	// Create a connection to the database database and version we want to use.
	const contactDb = await openDB("mood", 1);

	// Create a new transaction and specify the database and data privileges.
	const tx = contactDb.transaction("mood", "readwrite");

	// Open up the desired object store.
	const store = tx.objectStore("mood");

	// Use the .add() method on the store and pass in the content.
	const request = store.put({ id: 1, value: content });

	// Get confirmation of the request.
	const result = await request;
	console.log("🚀 - data saved to the database", result);
};
// export const putDb = async (content) => console.error('putDb not implemented');

// Export a function we will use to GET to the database.
export const getDb = async (content) => {
	console.log("GET from the database");

	// Create a connection to the database database and version we want to use.
	const contactDb = await openDB("mood", 1);

	// Create a new transaction and specify the database and data privileges.
	const tx = contactDb.transaction("mood", "readonly");

	// Open up the desired object store.
	const store = tx.objectStore("mood");

	// Use the .get() method to get one data in the database.
	const request = store.get({ id: 1, value: content });

	// Get confirmation of the request.
	const result = await request;
	console.log("result.value", result);
	return result.value;
};

//Start the database
initdb();
