import React, { useState, useEffect } from 'react';
import { View, Text, Image, Alert, Keyboard } from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';
import { MyInput } from '../components/MyInput';
import { MyBtn } from '../components/MyBtn';
import Api from '../services/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Login( { navigation } ) {

    const keyAsyncStorage = "@ifrndo:login";

    const [matricula, setMatricula] = useState('');
    const [senha, setSenha] = useState('');

    async function loginAutetication() {

        try {
            const retorno = await AsyncStorage.getItem(keyAsyncStorage);
            const parseJson = JSON.parse(retorno);

            token = (parseJson || '');

            await Api.get('minhas-informacoes/meus-dados/',{
                headers: {
                    'authorization': 'jwt ' + token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            navigation.navigate('Home');
        } catch(error) {
            console.log("Login");
        }
    }

    async function handleLogin() {
        var params = new URLSearchParams();
        params.append('username', matricula);
        params.append('password', senha);

        try {
            responseToken = await Api.post('autenticacao/token/', params);
            const {token} = responseToken.data;

            await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(token));

            setMatricula('');
            setSenha('');
            Keyboard.dismiss()

            loginAutetication();

        } catch(error) {
            Alert.alert("Erro na Autenticação");
        }
    }

    async function clear() {
        await AsyncStorage.clear();
    }

    useEffect( ()=> {
        loginAutetication();
    }, []);

    return (
        <View style={GlobalStyle.containerLogin}>
            <Image style={GlobalStyle.imgIf} source={require('../images/if.png')} />
            <Text style={GlobalStyle.titulo}>IFRN.DO</Text>

            <MyInput placeholder="Matricula" value={matricula} onChangeText={setMatricula} />
            <MyInput placeholder="Senha" secureTextEntry={true} value={senha} onChangeText={setSenha} />

            <MyBtn text="Entrar" onPress={ () => handleLogin() } />
        </View>
    )
}