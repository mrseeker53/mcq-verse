import { configureStore } from "@reduxjs/toolkit";
import questionsReducer from "./questionsSlice";

// Create & export redux store
export const store = configureStore({
    reducer: {
        questions: questionsReducer,
    },
});