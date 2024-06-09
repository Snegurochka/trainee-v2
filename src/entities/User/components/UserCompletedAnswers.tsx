import { useSelector } from "react-redux";

import { selectSortedCompleted } from "../services/user-selectors";
import { UserAnswersTotal } from "./UserAnswersTotal";
import { Stack } from "../../../shared/UI/Box/Box";
import { AnswersList } from "../../Answers";



export const UserCompletedAnswers = () => {
  const completedAnswers = useSelector(selectSortedCompleted);
  return (
    <Stack gap={2}>
      <h4>Answers list</h4>
      <UserAnswersTotal />
      <AnswersList answers={completedAnswers} />
    </Stack>
  );
};
