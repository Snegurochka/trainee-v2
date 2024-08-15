import { TQuiz } from "./quiz-type";

export const getRandomInt = (max: number) => Math.floor(Math.random() * max);

export const removeDuplicates = (arr: number[]) => {
  return Array.from(new Set(arr));
};

export const getRandomQuestions = (questions: TQuiz[], count: number) => {
  const shuffled = [...questions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};