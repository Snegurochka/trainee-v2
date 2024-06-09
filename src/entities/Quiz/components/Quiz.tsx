import { useSelector } from "react-redux";

import { selectIsResultCard } from "../services/quiz-selector";

import { QuizCard } from "./QuizCard";
import { QuizControls } from "./QuizControls";
import { QuizResult } from "./QuizResult";
import { FlexBox, Stack } from "../../../shared/UI/Box/Box";
import { AnswersCounter } from "../../Answers";



export const Quiz = () => {
  const isResult = useSelector(selectIsResultCard);
  return (
    <FlexBox>
        {!isResult ? (
          <Stack gap={3}>
            <QuizCard />
            <QuizControls />
            <AnswersCounter />
          </Stack>
        ) : (
          <QuizResult />
        )}
    </FlexBox>
  );
};
