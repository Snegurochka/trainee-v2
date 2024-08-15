import { useCallback } from "react";

import {
  pushCorrectAnswer,
  incrementTotalAnswers,
} from "../../Answers/services/answers-slice";
import { selectCompleted } from "../../User/services/user-selectors";
import { useQuizRound } from "./quiz-round-hook";
import { selectIsToggled, selectQuestion } from "./quiz-selector";
import { nextQuestion, toggleAnswer } from "./quiz-slice";
import { useAppDispatch, useAppSelector } from "../../../shared/services/hooks/redux";

export const useQuiz = () => {
  const question = useAppSelector(selectQuestion);
  const isToggled = useAppSelector(selectIsToggled);
  const completedQuiz = useAppSelector(selectCompleted);

  const dispatch = useAppDispatch();
  const { isLastQuestion, endOfTheRound } = useQuizRound();

  const setNewQuestion = useCallback(() => {
    if (isLastQuestion) {
      endOfTheRound(completedQuiz);
    } else {
      dispatch(nextQuestion());
      dispatch(incrementTotalAnswers());
    }
  }, [dispatch,  completedQuiz, endOfTheRound, isLastQuestion]);

  const handleAnswer = useCallback(
    (isCorrect: boolean) => {
      setNewQuestion();
      isCorrect && dispatch(pushCorrectAnswer(question.id));
    },
    [dispatch, setNewQuestion, question.id]
  );

  const correctAnswerHandler = useCallback(() => {
    handleAnswer(true);
  }, [handleAnswer]);

  const wrongAnswerHandler = useCallback(() => {
    handleAnswer(false);
  }, [handleAnswer]);

  const toggleAnswerHandler = useCallback(() => {
    dispatch(toggleAnswer());
  }, [dispatch]);

  return {
    question,
    isToggled,
    correctAnswerHandler,
    wrongAnswerHandler,
    toggleAnswerHandler,
  };
};
