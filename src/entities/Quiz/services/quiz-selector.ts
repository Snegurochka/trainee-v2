import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../app/services/store";
import { selectCompleted } from "../../User/services/user-selectors";

export const selectQuiz = (state: RootState) => state.quiz.quiz;
export const selectIsToggled = (state: RootState) => state.quiz.isToggled;
export const selectIsResultCard = (state: RootState) => state.quiz.isResultCard;
export const selectCurrentQuestions = (state: RootState) => state.quiz.currentQuestions;
export const selectIndex = (state: RootState) => state.quiz.index;
export const selectQuestion = (state: RootState) => state.quiz.currentQuestions[state.quiz.index];
export const selectCurrentQuestionId = (state: RootState) => state.quiz.currentQuestions[state.quiz.index].id;

export const selectAvailableQuestions = createSelector(
    selectQuiz,
    selectCompleted,
    (questions, completedQuestions) => {
      return questions.filter((question) => !completedQuestions.includes(question.id));
    }
  );
