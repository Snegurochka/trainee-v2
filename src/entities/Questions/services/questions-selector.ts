import { RootState } from "../../../app/services/store";

export const selectQuestions = (state: RootState) => state.questions.questions;