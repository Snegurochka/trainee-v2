import { useEffect } from "react";
import { Stack } from "../../../shared/UI/Box/Box";
import { QuestionsItem } from "./QuestionsItem";
import { useAppDispatch, useAppSelector } from "../../../shared/services/hooks/redux";
import { fetchQuestions } from "../services/questions-slice";
import { selectQuestions } from "../services/questions-selector";

export const QuestionsList = () => {
  const dispatch = useAppDispatch();

  const questions = useAppSelector(selectQuestions);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, []);

  return (
    <Stack gap={4}>
      {questions.map((item) => (
        <QuestionsItem key={item.idDoc} question={item} />
      ))}
    </Stack>
  );
};
