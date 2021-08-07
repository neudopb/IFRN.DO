import React from 'react';
import { View, Text, Image } from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';
import { MyInput } from '../components/MyInput';
import { MyBtn } from '../components/MyBtn';

export function Login( { navigation } ) {
    return (
        <View style={GlobalStyle.containerLogin}>
            <Image style={GlobalStyle.imgIf} source={require('../images/if.png')} />
            <Text style={GlobalStyle.titulo}>IFRN.DO</Text>
            <MyInput placeholder="Login" />
            <MyInput placeholder="Senha" />
            <MyBtn text="Entrar" onPress={ () => navigation.navigate('Home') } />
        </View>
    )
}