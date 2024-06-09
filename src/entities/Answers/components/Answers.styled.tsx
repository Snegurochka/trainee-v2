import styled from "styled-components";
import { FlexBox } from "../../../shared/UI/Box/Box";

export const AnswersBox = styled(FlexBox)`
  justify-content: start;
  flex-wrap: wrap;
  justify-content: center;
`;

export const QuestionWrapper = styled.div`
  padding: 4px;
  border: 1px solid #7d7d7d;
  margin: 2px;
  min-width: 30px;
  text-align: center;
  border-radius: 4px;
`;

export const AnswerWrapper = styled(QuestionWrapper)`
  border: 1px solid ${p => p.theme.primary};
  background-color: ${p => p.theme.primary};
`;

