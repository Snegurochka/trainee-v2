import styled from "styled-components";
import type { TQuiz } from "../../Quiz/services/quiz-type";

const AccordionDetailsWrapper = styled.div`
  border-top: 1px solid #e0e0e0;
`;

type TQuestionsItemProps = {
  quiz: TQuiz;
};

export const QuestionsItem = ({ quiz }: TQuestionsItemProps) => {
  const { id, question, answer, category } = quiz;
  return (
    <AccordionDetailsWrapper>
      <pre>
        {category}: {id}. {question} - {answer}
      </pre>
    </AccordionDetailsWrapper>
  );
};
