
import { TrainingResult, RatingLevel } from '../types';

export const calculateTraining = (
  dailyHours: number[],
  target: number = 2
): TrainingResult => {
  const periodLength = dailyHours.length;
  const trainingDays = dailyHours.filter((hours) => hours > 0).length;
  const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);
  const average = periodLength > 0 ? totalHours / periodLength : 0;
  const success = average >= target;

  let rating: RatingLevel;
  let ratingDescription: string;

  if (average >= target) {
    rating = 3;
    ratingDescription = '¡Excelente trabajo! Has alcanzado o superado tu meta.';
  } else if (average >= target * 0.75) {
    rating = 2;
    ratingDescription = 'Buen intento, estuviste cerca de tu meta.';
  } else {
    rating = 1;
    ratingDescription = 'Por debajo de la meta. ¡Aumenta el esfuerzo!';
  }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average: Number(average.toFixed(2)),
  };
};