import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, Button, TextInput, View } from 'react-native';

import { TrainingResult } from './types';
import { calculateTraining } from './logic/calculadora';
import { DayInput } from './components/Dayinputs';
import { ResultCard } from './components/ResultCard';

const DAYS = ['Dia 1', 'Dia 2', 'Dia 3', 'Dia 4', 'Dia 5', 'Dia 6', 'Dia 7'];

export default function App(): React.JSX.Element {
  const [weeklyHours, setWeeklyHours] = useState<string[]>(['0', '0', '0', '0', '0', '0', '0']);
  const [target, setTarget] = useState<string>('2');
  const [result, setResult] = useState<TrainingResult | null>(null);

  const handleInputChange = (index: number, text: string) => {
    const updated = [...weeklyHours];
    updated[index] = text;
    setWeeklyHours(updated);
  };

  const calculateExercise = () => {
    const numericHours = weeklyHours.map((val) => parseFloat(val) || 0);
    const numericTarget = parseFloat(target) || 2;

    const calculatedResult = calculateTraining(numericHours, numericTarget);
    setResult(calculatedResult);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Calculadora de Entrenamiento</Text>
        
        <View>
          <Text>Meta (target):</Text>
          <TextInput
            keyboardType="numeric"
            value={target}
            onChangeText={setTarget}
          />
        </View>

        <Text>Horas por día:</Text>
        {DAYS.map((day, index) => (
          <DayInput
            key={day}
            dayName={day}
            value={weeklyHours[index]}
            onChangeText={(text) => handleInputChange(index, text)}
          />
        ))}

        <Button title="Calcular" onPress={calculateExercise} />

        {result && <ResultCard result={result} />}
      </ScrollView>
    </SafeAreaView>
  );
}