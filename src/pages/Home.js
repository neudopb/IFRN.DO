import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Keyboard, Alert } from 'react-native';
import GlobalStyles from '../styles/GlobalStyle';
import { MyItem } from '../components/MyItem';
import { MyInpTarefa } from '../components/MyInpTarefa';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Home() {

    const keyAsyncStorage = "@ifrndo:tasks";

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    const [count, setCount] = useState(0);

    async function salvarTarefa() {

        if (task.length) {

            const obj = {
                id: String(new Date().getTime()),
                name: task,
                checked: false
            }

            const vetData = [...tasks, obj];

            try {
                await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(vetData));
            } catch(error) {
                Alert.alert("Erro ao salvar");
            }

            loadData();
        }

        setTask('');
        Keyboard.dismiss();
    }

    async function deletarTarefa(id) {
        const newData = tasks.filter(item => item.id != id);

        try {
            await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(newData));
        } catch(error) {
            Alert.alert("Erro ao Deletar");
        }

        loadData();
    }

    async function setChecked(index) {
        let item = tasks[index];

        item = {
            ...item,
            checked: !item.checked
        }

        tasks[index] = item;

        await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(tasks));

        loadData();
    }

    async function loadData() {
        try {
            const retorno = await AsyncStorage.getItem(keyAsyncStorage);
            const parseJson = JSON.parse(retorno);

            await setTasks(parseJson || []);

            try{
                await setCount(parseJson.filter(item => item.checked == false).length);
            } catch {
                await setCount(0);
            }

        } catch(error) {
            Alert.alert("Erro na leitura");
        }
    }

    async function clear() {
        await AsyncStorage.clear();
    }

    useEffect( ()=> {
        loadData();
    }, []);

    return (
        <View style={GlobalStyles.container}>
            <View style={GlobalStyles.containerHeader}>
                <View style={GlobalStyles.textHeader}>
                    <Text style={GlobalStyles.tituloHome}>IFRN.DO</Text>
                    <Text style={GlobalStyles.txtTarefas}>Você tem <Text style={{fontWeight:'bold'}}>{count} tarefas</Text></Text>
                </View>
            </View>

            <MyInpTarefa placeholder="Adicione uma tarefa" value={task}
                onChangeText={setTask} onPress={salvarTarefa}
            />

            <View style={GlobalStyles.containerBody}>
                <FlatList data={tasks}
                    keyExtractor={item => item.id.toString()}
                    renderItem={ ({item, index}) => (
                        <MyItem tarefa={item.name} onChecked={ () => setChecked(index)} checked={item.checked} apagar={ () => deletarTarefa(item.id) } />
                    )}
                />
            </View>
        </View>
    )
}