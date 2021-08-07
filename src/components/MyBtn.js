import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';

export function MyBtn(props) {
    return (
        <TouchableOpacity onPress={props.onPress} style={GlobalStyle.btn}>
            <Text style={GlobalStyle.textBtn}>{props.text}</Text>
        </TouchableOpacity>
    )
}