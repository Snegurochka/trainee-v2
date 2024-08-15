import { useSelector } from "react-redux";
import styled from "styled-components";

import { QuizWinCard } from "./QuizWinCard";
import { selectCorrectAnswers, AnswersListShort } from "../../Answers";
import { Card } from "../../../shared/UI/Card/Card";
import { ChallengeWinCard } from "../../../features/Challenge";

const CardWrapper = styled(Card)`
  padding: 24px;
  text-align: center;
  margin: 24px auto;
  max-width: 400px;
`;

export const QuizResult = () => {
  const correctAnswers = useSelector(selectCorrectAnswers);
  return (
    <CardWrapper>
      <h3>Quiz complete!</h3>
      <p>Quiz results:</p>
      <AnswersListShort answers={correctAnswers} />
      <ChallengeWinCard />
      {correctAnswers.length > 3 && <QuizWinCard />}
    </CardWrapper>
  );
};
