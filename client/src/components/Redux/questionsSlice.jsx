// Import necessary modules from redux toolkit and axios for API calls
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Redux action: Async thunk to search questions by keyword
export const searchQuestionsByKeyword = createAsyncThunk(
  "questions/searchQuestionsByKeyword",
  async () => {
    // Replace the URL with your API endpoint
    const response = await axios.get("http://localhost:3030");
    return response.data.data;
  }
);

// Redux action: Async thunk to search questions by date range
export const searchQuestionsByDate = createAsyncThunk(
  "questions/searchQuestionsByDate",
  async ({ startDate, endDate }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `http://localhost:3030/search?startDate=${startDate}&endDate=${endDate}`
      );
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response.data); // Handle error properly
    }
  }
);

// Create the questions slice for the questions state
const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    questions: [],
    loading: false,
    error: null,
    searchResults: [], // Separate searchResults from questions
  },
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
      // Search questions by keyword
      .addCase(searchQuestionsByKeyword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchQuestionsByKeyword.fulfilled, (state, action) => {
        state.questions = action.payload;
        state.loading = false;
      })
      .addCase(searchQuestionsByKeyword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Search questions by Date
      .addCase(searchQuestionsByDate.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchQuestionsByDate.fulfilled, (state, action) => {
        state.searchResults = action.payload; // Update searchResults instead of questions
        state.loading = false;
      })
      .addCase(searchQuestionsByDate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message; // Handle errors correctly
      });
  },
});

// Export actions to use them in components
export const { setQuestions, addQuestion, updateQuestion, deleteQuestion } =
  questionsSlice.actions;
// Export reducer to configure store
export default questionsSlice.reducer;
