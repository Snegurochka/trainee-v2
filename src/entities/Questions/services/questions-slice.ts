import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { TQuestion } from "./questions-types";
import { getQuestions } from "./questions-firebase";

export const fetchQuestions = createAsyncThunk(
  "questions/fetchQuestions",
  async () => {
    const questions = await getQuestions();
    return questions;
  }
);

const initialState = {
  questions: [] as TQuestion[],
};
const questionsReducer = createSlice({
  name: "questions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.fulfilled, (state, action) => {
      state.questions = action.payload;
    });
  },
});

export default questionsReducer.reducer;
