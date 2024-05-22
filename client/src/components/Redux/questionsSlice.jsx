import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questions: [],
};

// Create redux slice
const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    addQuestion: (state, action) => {
      state.questions.push(action.payload);
    },
    updateQuestion: (state, action) => {
      const { id, data } = action.payload;
      const index = state.questions.findIndex((q) => q.id === id);
      if (index !== -1) {
        state.questions[index] = { ...state.questions[index], ...data };
      }
    },
    deleteQuestion: (state, action) => {
        state.questions = state.questions.filter(q => q.id !== action.payload);
    },
  },
});

export const { setQuestions, addQuestion, updateQuestion, deleteQuestion} = questionsSlice.actions;
export default questionsSlice.reducer;