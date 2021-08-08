import React, { useState } from 'react';
import { View, Text, FlatList, Keyboard } from 'react-native';
import GlobalStyles from '../styles/GlobalStyle';
import { MyItem } from '../components/MyItem';
import { MyInpTarefa } from '../components/MyInpTarefa';

export function Home() {

    const [novo, setNovo] = useState("");
    const [check, setCheck] = useState(false);
    const [tarefas, setTarefas] = useState([]);
    const [total, setTotal] = useState(0);

    function salvarTarefa() {

        console.log('teste');

        const obj = {
            id: String(new Date().getTime()),
            nome: novo,
            realizado: check 
        }

        setTarefas(oldValue => [...oldValue, obj]);

        setTotal(tarefas.length+1);

        setNovo('');
        setCheck(false);
        Keyboard.dismiss();
    }

    function deletarTarefa(id){
        const newData = tarefas.filter(item => item.id != id);

        setTarefas(newData);

        setTotal(tarefas.length-1);
    }

    return (
        <View style={GlobalStyles.container}>
            <View style={GlobalStyles.containerHeader}>
                <View style={GlobalStyles.textHeader}>
                    <Text style={GlobalStyles.tituloHome}>IFRN.DO</Text>
                    <Text style={GlobalStyles.txtTarefas}>Você tem <Text style={{fontWeight:'bold'}}>{total} tarefas</Text></Text>
                </View>
            </View>

            <MyInpTarefa placeholder="Adicione uma tarefa" value={novo}
                onChangeText={setNovo} onPress={salvarTarefa}
            />

            <View style={GlobalStyles.containerBody}>
                <FlatList data={tarefas}
                    keyExtractor={item => item.id.toString()}
                    renderItem={ ({item}) => (
                        <MyItem tarefa={item.nome} onPress={ () => deletarTarefa(item.id) } />
                    )}
                />
            </View>
        </View>
    )
}