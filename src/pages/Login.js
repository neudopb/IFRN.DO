import React, { useState } from 'react';
import { View, Text, Image, Alert, Keyboard, ActivityIndicator } from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';
import MyTheme from '../styles/MyTheme';
import { MyInput } from '../components/MyInput';
import { MyBtn } from '../components/MyBtn';
import { BtnGoogle } from '../components/BtnGoogle';
import { useAuth } from '../contexts/Auth';

export function Login( { navigation } ) {

    const [matricula, setMatricula] = useState('');
    const [senha, setSenha] = useState('');
    const {handleSignWithSuap, handleSignWithGoogle} = useAuth();
    const [isLoading, setIsLoading] = useState(false);

    async function loginSuap() {

        Keyboard.dismiss();

        if (!matricula || !senha) {
            Alert.alert("Informe todos os dados");
        }

        try {
            setIsLoading(true);
            return await handleSignWithSuap(matricula, senha);
        } catch(error) {
            setIsLoading(false);
            console.log(error);
        }
    }

    async function loginGoogle() {
        try {
            setIsLoading(true);
            return await handleSignWithGoogle();
        } catch(error) {
            setIsLoading(false);
            console.log(error);
        }
    }

    if (isLoading) {
        return (
            <View style={GlobalStyle.actInd}>
                <ActivityIndicator size="large" color={MyTheme.colors.primary} />
            </View>
        )
    }

    return (
        <View style={GlobalStyle.containerLogin}>
            <Image style={GlobalStyle.imgIf} source={require('../images/if.png')} />
            <Text style={GlobalStyle.titulo}>IFRN.DO</Text>

            <MyInput placeholder="Matricula" value={matricula} onChangeText={setMatricula} />
            <MyInput placeholder="Senha" secureTextEntry={true} value={senha} onChangeText={setSenha} />

            <MyBtn text="Entrar" onPress={ loginSuap } />

            <BtnGoogle text="Login com Google" onPress={ loginGoogle } />
        </View>
    )
}