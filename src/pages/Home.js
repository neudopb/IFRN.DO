import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import GlobalStyles from '../styles/GlobalStyle';
import MyTheme from '../styles/MyTheme';
import { MyItem } from '../components/MyItem';
import { AntDesign } from '@expo/vector-icons';

export function Home( { navigation } ) {
    return (
        <View style={GlobalStyles.container}>
            <View style={GlobalStyles.containerHeader}>
                <View style={GlobalStyles.textHeader}>
                    <Text style={GlobalStyles.tituloHome}>IFRN.DO</Text>
                    <Text style={GlobalStyles.txtTarefas}>Você tem <Text style={{fontWeight:'bold'}}>3 tarefas</Text></Text>
                </View>
            </View>

            <View style={GlobalStyles.containerInput}>
                <TextInput
                    style={GlobalStyles.inputAdd}
                    placeholder="Adicione uma tarefa"
                    placeholderTextColor={MyTheme.colors.gray2}
                />
                <TouchableOpacity style={GlobalStyles.btnInput}>
                    <AntDesign name="right" size={20} color={MyTheme.colors.gray2} />
                </TouchableOpacity>
            </View>

            <View style={GlobalStyles.containerBody}>
                <MyItem tarefa="Pagar boleto"></MyItem>
                <MyItem tarefa="Pagar boleto"></MyItem>
            </View>
        </View>
    )
}