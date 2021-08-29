import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth, AuthProvider } from './src/contexts/Auth';
import { MainRoutes } from './src/routes/MainRoutes';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar barStyle="light-content"  />
        <MainRoutes />
      </AuthProvider>
    </NavigationContainer>
  );
}