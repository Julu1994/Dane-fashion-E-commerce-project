import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeStep: 0,
};

export const StepSlice = createSlice({
    name: "Step",
    initialState,
    reducers: {
        increaseStep(state) {
            state.activeStep = state.activeStep + 1;
        },
        resetStep(state) {
            state.activeStep = 0;
        },
    },
});

export const stepActions = StepSlice.actions;
