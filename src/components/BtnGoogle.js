import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

export function BtnGoogle(props) {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.btn}>
            <AntDesign name="google" size={24} color="white" />
            <Text style={styles.txt}>{props.text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btn: {
        height: 50,
        width: '70%',
        borderRadius: 10,
        marginTop: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#EA4335',
    },
    txt: {
        fontSize: 20,
        color: '#FFF'
    },
});