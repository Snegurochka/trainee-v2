import answersReducer, {
  pushCorrectAnswer,
  incrementTotalAnswers,
} from "./services/answers-slice";
import {
  selectCorrectAnswers,
  selectTotalAnswers,
} from "./services/answers-selector";
import { AnswersListShort } from "./components/AnswersListShort";
import { AnswersList } from "./components/AnswersList";
import { AnswersCounter } from "./components/AnswersCounter";

export {
  answersReducer,
  selectCorrectAnswers,
  AnswersListShort,
  AnswersList,
  AnswersCounter,
  pushCorrectAnswer,
  incrementTotalAnswers,
  selectTotalAnswers,
};
