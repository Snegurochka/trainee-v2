import { useSelector } from "react-redux";
import styled from "styled-components";

import { QUIZ_PER_ROUND } from "../../Quiz/services/quiz-const";
import {
  selectCorrectAnswers,
  selectTotalAnswers,
} from "../services/answers-selector";
import { FlexBox } from "../../../shared/UI/Box/Box";
import { ProgressBar } from "../../../shared/UI/ProgressBar/ProgressBar";


const AnswersCounterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const AnswersCounter = () => {
  const correct = useSelector(selectCorrectAnswers);
  const total = useSelector(selectTotalAnswers);
  const barValue = (total / QUIZ_PER_ROUND) * 100;
  return (
    <AnswersCounterWrapper>
      <FlexBox>
        <span>
          Correct: {correct.length}/ {total}
        </span>
        <span>Total: {QUIZ_PER_ROUND}</span>
      </FlexBox>
      <ProgressBar value={barValue} />
    </AnswersCounterWrapper>
  );
};
