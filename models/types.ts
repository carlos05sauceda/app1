

export type RatingLevel = 1 | 2 | 3;

export interface TrainingResult {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: RatingLevel;
  ratingDescription: string;
  target: number;
  average: number;
}