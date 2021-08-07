import React from 'react';
import { View, Text, TextInput } from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';
import MyTheme from '../styles/MyTheme';

export function MyInput(props) {
    return (
        <TextInput 
            style={GlobalStyle.inputLogin}
            placeholder={props.placeholder}
            placeholderTextColor={MyTheme.colors.gray2}
            onChangeText={props.onChangeText}
            value={props.value}
        />
    );
}