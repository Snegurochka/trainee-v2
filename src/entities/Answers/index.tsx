import answersReducer from "./services/answers-slice";
import { selectCorrectAnswers } from "./services/answers-selector";
import { AnswersListShort } from "./components/AnswersListShort";
import { AnswersList } from "./components/AnswersList";
import { AnswersCounter } from "./components/AnswersCounter";

export {
  answersReducer,
  selectCorrectAnswers,
  AnswersListShort,
  AnswersList,
  AnswersCounter,
};
