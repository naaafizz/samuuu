export interface Memory {
  id: number;
  imageUrl: string;
  caption: string;
  date: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

export enum WishMood {
  FUNNY = 'Funny',
  EMOTIONAL = 'Emotional',
  POETIC = 'Poetic',
  BENGALI_SWEET = 'Bengali Sweet'
}