
import React from 'react';
import { View, Text, TextInput } from 'react-native';

interface DayInputProps {
  dayName: string;
  value: string;
  onChangeText: (text: string) => void;
}

export const DayInput: React.FC<DayInputProps> = ({ dayName, value, onChangeText }) => {
  return (
    <View>
      <Text>{dayName}:</Text>
      <TextInput
        keyboardType="numeric"
        value={value}
        onChangeText={onChangeText}
        
      />
    </View>
  );
};


