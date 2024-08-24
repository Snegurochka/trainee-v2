import styled from "styled-components";
import { useAppSelector } from "../../../shared/services/hooks/redux";
import { AnswersCounter } from "../../Answers";
import { selectIsResultCard } from "../services/quiz-selector";
import { QuizCard } from "./QuizCard";
import { QuizControls } from "./QuizControls";
import { QuizResult } from "./QuizResult";
import { Card } from "../../../shared/UI/Card/Card";
import { Comments, selectIsOpened } from "../../../features/Comments";

const Wrapper = styled(Card)`
  width: 600px;
  display: flex;
  flex-direction: column;
`;

const QuizContentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 24px;
`;

export const QuizContent = () => {
  const isResult = useAppSelector(selectIsResultCard);
  const isCommentsOpened = useAppSelector(selectIsOpened);
  if (isResult) {
    return <QuizResult />;
  }

  return (
    <QuizContentWrapper>
      <Wrapper gap={3}>
        <QuizCard />
        <QuizControls />
        <AnswersCounter />
      </Wrapper>
      {isCommentsOpened ? <Comments /> : null}
    </QuizContentWrapper>
  );
};
