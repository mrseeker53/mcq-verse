// Import necessary modules from redux toolkit and axios for API calls
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Create an async thunk to fetch questions from the server
export const fetchQuestions = createAsyncThunk(
  "questions/fetchQuestions",
  async () => {
    // Replace the URL with your API endpoint
    const response = await axios.get("http://localhost:3030")
    return response.data.data;
  }
);

// Initial state for the questions slice
const initialState = {
  questions: [],
  loading: false,
  error: null,
};

// Create a slice for questions with initial state, reducers, and extra reducers for async actions
const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    // Reducer to set the questions array
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    // Reducer to add a new question
    addQuestion: (state, action) => {
      state.questions.push(action.payload);
    },
    // Reducer to update an existing question
    updateQuestion: (state, action) => {
      const { id, data } = action.payload;
      const index = state.questions.findIndex((q) => q.id === id);
      if (index !== -1) {
        state.questions[index] = { ...state.questions[index], ...data };
      }
    },
    // Reducer to delete a question
    deleteQuestion: (state, action) => {
      state.questions = state.questions.filter((q) => q.id !== action.payload);
    },
  },
  // Handle asynchronous actions in extraReducers
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.questions = action.payload;
        state.loading = false;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Export actions to use them in components
export const { setQuestions, addQuestion, updateQuestion, deleteQuestion } =
  questionsSlice.actions;
// Export reducer to configure store
export default questionsSlice.reducer;
