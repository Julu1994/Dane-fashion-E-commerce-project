import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userProfileToggle: false,
};

export const toggleSlice = createSlice({
    name: "toggle",
    initialState,
    reducers: {
        profileToggle(state) {
            state.userProfileToggle = !state.userProfileToggle;
        },
    },
});

export const toggleActions = toggleSlice.actions;
