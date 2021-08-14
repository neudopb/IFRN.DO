import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MyTheme from '../styles/MyTheme';
import { AntDesign } from '@expo/vector-icons'; 
import { CheckBox } from './CheckBox';

export function MyItem(props) {

    return (
        <View style={styles.viewItem}>
            <View style={styles.viewCheck}>
                <CheckBox isChecked={props.checked} onPress={props.onChecked} />
            </View>
            <View style={styles.viewText}>
                <Text style={props.checked ? styles.txt2 : styles.txt}>{props.tarefa}</Text>    
            </View>
            <TouchableOpacity style={styles.btnDelete} onPress={props.apagar}>
                <AntDesign name="delete" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    viewItem: {
        height: 50,
        width: 350,
        padding: 10,
        margin: 4,
        marginLeft: 8,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: MyTheme.colors.gray3,
        borderWidth: 1,
        borderColor: MyTheme.colors.gray2,
        flex: 1
    },
    viewCheck: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
    }, 
    check: {
        height: 20,
        alignSelf: 'center',
    },
    viewText: {
        justifyContent: 'flex-start',
        flex: 1,
    }, 
    txt: {
        fontSize: 18,
        paddingLeft: 10,
        color: MyTheme.colors.black,
    },
    txt2: {
        fontSize: 18,
        paddingLeft: 10,
        color: MyTheme.colors.primary,
        textDecorationLine: 'line-through',
    },
    btnDelete: {
        padding: 10,
    },
});