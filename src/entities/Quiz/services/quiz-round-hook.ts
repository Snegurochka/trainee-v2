import { useCallback } from "react";
import { useSelector } from "react-redux";
import {
  selectCorrectAnswers,
  selectTotalAnswers,
} from "../../Answers/services/answers-selector";
import { selectIdDoc } from "../../User/services/user-selectors";
import { isResultCard } from "./quiz-slice";
import { removeDuplicates } from "./quiz-utils";
import { setResult } from "../../User/services/user-slice";
import { QUIZ_PER_ROUND } from "./quiz-const";
import { useAppDispatch } from "../../../shared/services/hooks/redux";
import { updateXp } from "../../../features/Xp/services/xp-firebase";
import { useChallenge } from "../../../features/Challenge";

const getCompleted = (completedQuiz: number[], correctAnswers: number[]) => {
  const uniqueCompleted = removeDuplicates([
    ...completedQuiz,
    ...correctAnswers,
  ]);
  return uniqueCompleted.sort((a, b) => a - b);
};

export const useQuizRound = () => {
  const idDoc = useSelector(selectIdDoc);
  const correctAnswers = useSelector(selectCorrectAnswers);
  const total = useSelector(selectTotalAnswers);

  const { updateLastCheckIn } = useChallenge();

  const dispatch = useAppDispatch();

  const endOfTheRound = useCallback(
    (completedQuiz: number[]) => {
      dispatch(isResultCard());

      if (!idDoc) return;
      const completed = getCompleted(completedQuiz, correctAnswers);
      dispatch(setResult({ completed, idDoc }));

      if (correctAnswers.length < 3) return;
      updateXp(idDoc, correctAnswers.length);
      updateLastCheckIn();
    },
    [dispatch, correctAnswers, idDoc]
  );

  const isLastQuestion = total === QUIZ_PER_ROUND;

  return { endOfTheRound, isLastQuestion };
};
