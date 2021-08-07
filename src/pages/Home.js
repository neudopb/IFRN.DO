import React from 'react';
import { View, Text } from 'react-native';
import GlobalStyles from '../styles/GlobalStyle';

export function Home( { navigation } ) {
    return (
        <View style={GlobalStyles.container}>
            <View style={GlobalStyles.containerHomeHeader}>
                <View style={GlobalStyles.textHeader}>
                    <Text style={GlobalStyles.tituloHome}>IFRN.DO</Text>
                    <Text style={GlobalStyles.txtTarefas}>Você tem 3 tarefas</Text>
                </View>
                
            </View>
            <View style={GlobalStyles.containerHomeBody}>
                <Text>Hello World</Text>
            </View>
        </View>
    )
}