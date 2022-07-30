import { configureStore } from "@reduxjs/toolkit";
import { moodSlice } from "./reducer";
import { apiSlice } from "./apiSlice";

export const store = configureStore({
	reducer: {
		mood: moodSlice,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
