import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../pages/Login';

const LoginStack = createStackNavigator();

export function LoginRoutes() {
    return (
        <LoginStack.Navigator>
            <LoginStack.Screen name="Login" component={Login} options={{headerShown: false}} />
        </LoginStack.Navigator>
    )
}