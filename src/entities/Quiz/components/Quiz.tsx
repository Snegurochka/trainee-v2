import { memo } from "react";
import { useSelector } from "react-redux";

import { selectCurrentQuestions } from "../services/quiz-selector";
import { QuizContent } from "./QuizContent";
import { QuizStartButton } from "./QuizStartButton";

export const Quiz = memo(() => {
  const currentQuestions = useSelector(selectCurrentQuestions);

  return currentQuestions.length > 0 ? <QuizContent /> : <QuizStartButton />;
});
