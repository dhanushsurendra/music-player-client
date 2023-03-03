import { createSlice } from "@reduxjs/toolkit";

export const spotifySlice = createSlice({
	name: "spotify",
	initialState: {
		loginDetails: null,
	},
	reducers: {
		spotifyLoginStart: (state) => {
			state.getUserProgress = true;
		},
		spotifyLoginSuccess: (state, action) => {
			state.accessToken = action.payload;
		},
		spotifyLoginFailure: (state) => {
			state.error = true;
		},
	},
});

export const {
	spotifyLoginCode,
    spotifyLoginStart,
    spotifyLoginSuccess,
    spotifyLoginFailure
} = spotifySlice.actions;

export default spotifySlice.reducer;
