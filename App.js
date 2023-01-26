import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import BMI from './components/BMI';

export default function App() {
  return (
    <View>
      <BMI />
    </View>
  );
}
