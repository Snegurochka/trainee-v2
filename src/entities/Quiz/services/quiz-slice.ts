import { createSlice } from "@reduxjs/toolkit";
import { quiz } from "./quiz-mock";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    index: 0,
    isToggled: false,
    isResultCard: false,
    currentQuestions: [],
    quiz,
  },
  reducers: {
    nextQuestion: (state) => {
      state.index += 1;
      state.isToggled = false;
    },
    setQuizByCategory: (state, action) => {
      const name = action.payload;

      state.quiz = quiz.filter((q) => q.category === name);

      state.index = 0;
      state.isToggled = false;
    },
    toggleAnswer: (state) => {
      state.isToggled = !state.isToggled;
    },
    isResultCard: (state) => {
      state.isResultCard = !state.isResultCard;
    },
    setCurrentQuestions: (state, action) => {
      state.currentQuestions = action.payload;
    }
  },
});

export const { nextQuestion, setQuizByCategory, toggleAnswer, isResultCard, setCurrentQuestions } = quizSlice.actions;
export default quizSlice.reducer;