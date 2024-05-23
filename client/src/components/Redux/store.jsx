// Import configureStore from redux toolkit and the questions reducer
import { configureStore } from '@reduxjs/toolkit';
import questionsReducer from './questionsSlice';

// Create and export the redux store
export const store = configureStore({
  reducer: {
    questions: questionsReducer,
  },
});