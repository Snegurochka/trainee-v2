  export type TQuestion = {
    idDoc: string;
    question_text: string;
    question_code?: string;
    answer_text: string;
    category: string;
    level: string;
    comment?: string;
    tags: string[]
  };