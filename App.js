import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/Routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content"  />
      <Routes />
    </NavigationContainer>
  );
}