import { memo } from "react";
import { FlexBox } from "../../../shared/UI/Box/Box";
import { Button } from "../../../shared/UI/Button/Button";
import { useQuiz } from "../services/quiz-hook";

export const QuizControls = memo(() => {
  const { correctAnswerHandler, wrongAnswerHandler } = useQuiz();
  return (
    <FlexBox>
      <Button  onClick={wrongAnswerHandler}>
        Send to training
      </Button>
      <Button
        onClick={correctAnswerHandler}
      >
        I know
      </Button>
    </FlexBox>
  );
});
