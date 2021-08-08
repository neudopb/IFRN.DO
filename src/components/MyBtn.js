import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import MyTheme from '../styles/MyTheme';

export function MyBtn(props) {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.btn}>
            <Text style={styles.textBtn}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        height: 50,
        width: '70%',
        margin: 20,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: MyTheme.colors.gray
    },
    textBtn: {
        fontSize: 20,
        color: MyTheme.colors.white,
    },
});