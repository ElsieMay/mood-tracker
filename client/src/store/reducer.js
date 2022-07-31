import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	low_mood: [],
	anxiousness: [],
};

export const moodSlice = createSlice({
	name: "mood",
	initialState,
	reducers: {
		saveMood: (state) => {},
	},
});

export const { saveMood } = moodSlice.actions;
export default moodSlice.reducer;
