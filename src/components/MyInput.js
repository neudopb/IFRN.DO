import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import MyTheme from '../styles/MyTheme';

export function MyInput(props) {
    return (
        <TextInput 
            style={styles.input}
            placeholder={props.placeholder}
            placeholderTextColor={MyTheme.colors.gray2}
            onChangeText={props.onChangeText}
            value={props.value}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        height: 45,
        width: '70%',
        margin: 10,
        borderRadius: 10,
        paddingLeft: 20,
        fontSize: 18,
        backgroundColor: MyTheme.colors.white,
    },
});