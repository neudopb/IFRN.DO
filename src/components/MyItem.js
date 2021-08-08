import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, CheckBox } from 'react-native';
import MyTheme from '../styles/MyTheme';
import { AntDesign } from '@expo/vector-icons'; 

export function MyItem(props) {
    return (
        <View style={styles.viewItem}>
            <View style={styles.viewCheck}>
                <CheckBox 
                    style={styles.check}
                    value={props.value}
                    onValueChange={props.onValueChange}
                />
                <Text style={styles.txt}>{props.tarefa}</Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={props.onPress}>
                <AntDesign name="delete" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    viewItem: {
        height: 50,
        width: '80%',
        padding: 10,
        margin: 2,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: MyTheme.colors.gray3,
    },
    viewCheck: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center'
    }, 
    check: {
        height: 20,
        alignSelf: 'center',
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
    btn: {
        padding: 15,
    },
});