import styled from "styled-components";
import { useAppSelector } from "../../../shared/services/hooks/redux";
import { AnswersCounter } from "../../Answers";
import { selectIsResultCard } from "../services/quiz-selector";
import { QuizCard } from "./QuizCard";
import { QuizControls } from "./QuizControls";
import { QuizResult } from "./QuizResult";
import { Card } from "../../../shared/UI/Card/Card";

const Wrapper = styled(Card)`
  margin: 24px auto;
  max-width: 400px;
  display: flex;
  flex-direction: column;
`;
export const QuizContent = () => {
  const isResult = useAppSelector(selectIsResultCard);
  if (isResult) {
    return <QuizResult />;
  }

  return (
    <Wrapper gap={3}>
      <QuizCard />
      <QuizControls />
      <AnswersCounter />
    </Wrapper>
  );
};
