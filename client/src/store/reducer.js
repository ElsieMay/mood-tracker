import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	low_mood: [],
	anxiousness: [],
};

export const moodSlice = createSlice({
	name: "mood",
	initialState,
	reducers: {
		getMood: (state) => {},
	},
});

export const { getMood } = moodSlice.actions;
export default moodSlice.reducer;
