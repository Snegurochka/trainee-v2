import styled from "styled-components";
import { TQuestion } from "../services/questions-types";
import { Card } from "../../../shared/UI/Card/Card";
import { CodeBox } from "../../../shared/UI/Box/CodeBox";
import { memo, useState } from "react";
import { Button } from "../../../shared/UI/Button/Button";

const QuestionsItemWrapper = styled(Card)`
  min-height: 160px;
  transition: all 0.3s ease;
`;

const QuestionsItemHead = styled.header`
  padding-bottom: 14px;
  border-bottom: 1px solid #e0e0e0;
`;

const QuestionsItemAnswer = styled.div`
  margin: 16px 0;
  background-color: #f5f5f5;
  padding: 16px;
`;

type TQuestionsItemProps = {
  readonly question: TQuestion;
};

export const QuestionsItem = memo(({ question }: TQuestionsItemProps) => {
  const { question_text, question_code, answer_text, category } = question;
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <QuestionsItemWrapper>
      <QuestionsItemHead>
        {category}: {question_text}
      </QuestionsItemHead>
      {question_code && <CodeBox>{question_code}</CodeBox>}
      <Button
        onClick={() => {
          setShowAnswer((s) => !s);
        }}
      >
        {showAnswer ? "Hide answer" : "Show answer"}
      </Button>
      {showAnswer && <QuestionsItemAnswer>{answer_text}</QuestionsItemAnswer>}
    </QuestionsItemWrapper>
  );
});
