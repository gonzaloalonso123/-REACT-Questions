export type User = {
  name: string;
  currentAnswer: string;
  currentRating: number;
  totalRating: number;
};

export type QuestionAnswers = {
  question: String;
  answers: String[];
};

export type Question = {
  question: string;
  answers: string[];
};
