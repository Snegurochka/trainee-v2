import { useSelector } from "react-redux";
import styled from "styled-components";

import { QuizWinCard } from "./QuizWinCard";
import { selectCorrectAnswers, AnswersListShort } from "../../Answers";



const CardWrapper = styled.div`
  padding: 24px;
  text-align: center;
`;

export const QuizResult = () => {
  const correctAnswers = useSelector(selectCorrectAnswers);
  return (
    <CardWrapper>
      <h3>Quiz complete!</h3>
      <p>Quiz results:</p>
      <AnswersListShort answers={correctAnswers} />
      {correctAnswers.length > 3 && <QuizWinCard />}
    </CardWrapper>
  );
};
