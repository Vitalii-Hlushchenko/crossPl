import React from 'react';
import { View, Alert } from 'react-native';
import CustomButton from './CreateButton'; 

export default function App() {
  const handleButtonPress = () => {
    Alert.alert('Button Pressed');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <CustomButton onPress={handleButtonPress} title="Button" />
    </View>
  );
}
