import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import GlobalStyles from '../styles/GlobalStyle';
import MyTheme from '../styles/MyTheme';
import { AntDesign } from '@expo/vector-icons';

export function MyInpTarefa(props) {
    return (
        <View style={styles.containerInput}>
            <TextInput
                style={styles.inputAdd}
                placeholder={props.placeholder}
                placeholderTextColor={MyTheme.colors.gray2}
                onChangeText={props.onChangeText}
                value={props.value}
            />
            <TouchableOpacity style={styles.btnInput} onPress={props.onPress}>
                <AntDesign name="right" size={20} color={MyTheme.colors.gray2} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    containerInput: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        transform: [{translateY:-30}],
    },
    inputAdd: {
        height: 60,
        width: '75%',
        paddingLeft: 20,
        fontSize: 15,
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
        backgroundColor: MyTheme.colors.white,
    },
    btnInput: {
        height: 60,
        padding: 15,
        justifyContent: 'center',
        borderLeftWidth: 1,
        borderTopRightRadius: 7,
        borderBottomRightRadius: 7,
        borderLeftColor: MyTheme.colors.gray2,
        backgroundColor: MyTheme.colors.white,
    }
});