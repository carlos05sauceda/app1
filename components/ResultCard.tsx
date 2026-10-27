
import React from 'react';
import { View, Text } from 'react-native';
import { TrainingResult } from '../types';

interface ResultCardProps {
  result: TrainingResult;
}

export const ResultCard: React.FC<ResultCardProps> = ({ result }) => {
  return (
    <View>
      <Text>--- Resultados ---</Text>
      <Text>periodlength: {result.periodLength}</Text>
      <Text>trainingdays: {result.trainingDays}</Text>
      <Text>success: {result.success ? 'true' : 'false'}</Text>
      <Text>rating: {result.rating}</Text>
      <Text>ratingdescription: {result.ratingDescription}</Text>
      <Text>target: {result.target}</Text>
      <Text>average: {result.average}</Text>
    </View>
  );
};