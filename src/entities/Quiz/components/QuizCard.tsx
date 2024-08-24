import styled from "styled-components";
import { useQuiz } from "../services/quiz-hook";
import { CodeBox } from "../../../shared/UI/Box/CodeBox";
import { CommentsSideBarButton } from "../../../features/Comments/components/CommentsSideBarButton";

const CardContentWrapper = styled(CodeBox)`
  white-space: pre-line;
`;

const CardWrapper = styled.div`
  cursor: pointer;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #e0e0e0;
  height: 34px;
  padding: 0 16px 6px;
`;

export const QuizCard = () => {
  const { question, toggleAnswerHandler, isToggled } = useQuiz();

  return (
    <CardWrapper onClick={toggleAnswerHandler}>
      <CommentsSideBarButton />
        <CardContentWrapper>
          {!isToggled ? question.question : question.answer}
        </CardContentWrapper>
      <CardBottom>{question.category}</CardBottom>
    </CardWrapper>
  );
};
