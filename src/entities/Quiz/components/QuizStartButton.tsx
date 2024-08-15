import styled from "styled-components";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../shared/services/hooks/redux";
import { Button } from "../../../shared/UI/Button/Button";
import { QUIZ_PER_ROUND } from "../services/quiz-const";
import { selectAvailableQuestions } from "../services/quiz-selector";
import { setCurrentQuestions } from "../services/quiz-slice";
import { getRandomQuestions } from "../services/quiz-utils";

const QuizButton = styled(Button)`
display: block;
margin: 54px auto;
`;

export const QuizStartButton = () => {
  const dispatch = useAppDispatch();
  const questions = useAppSelector(selectAvailableQuestions);

  const handleStartQuiz = () => {
    const randomQuestions = getRandomQuestions(questions, QUIZ_PER_ROUND);
    dispatch(setCurrentQuestions(randomQuestions));
  };
  return <QuizButton onClick={handleStartQuiz}>Start</QuizButton>;
};
