import React, { useState, useEffect, useContext, createContext } from 'react';
import { Alert } from 'react-native';
import Api from '../services/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as AuthSession from 'expo-auth-session'; 

const AuthContext = createContext();

function AuthProvider({ children }){

    const keyAsyncStorage = '@ifrndo:user';

    const [user, setUser] = useState({});
    const [userLoading, setUserLoading] = useState(false);

    async function handleSignWithSuap(matricula, senha) {
        var params = new URLSearchParams();
        params.append('username', matricula);
        params.append('password', senha);

        try {
            const responseToken = await Api.post('autenticacao/token/', params);
            const {token} = responseToken.data;

            const responseUser = await Api.get('minhas-informacoes/meus-dados/',{
                headers: {
                    'authorization': 'jwt ' + token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            const {id, nome_usual, email, url_foto_75x100} = responseUser.data;

            const userLogged = {
                id: id,
                email: email,
                name: nome_usual,
                photo: 'https://suap.ifrn.edu.br/' + url_foto_75x100,
                type: 'suap'
            }

            setUser(userLogged);
            await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(userLogged));

            console.log(userLogged);

        } catch(error) {
            Alert.alert("Erro na Autenticação.");
        }
    }

    async function handleSignWithGoogle() {
        try {
            const {CLIENT_ID} = process.env;
            const {REDIRECT_URI} = process.env;
            const RESPONSE_TYPE = 'token';
            const SCOPE = encodeURI('profile email');
            const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${ CLIENT_ID }&redirect_uri=${ REDIRECT_URI }&response_type=${ RESPONSE_TYPE }&scope=${ SCOPE }`;
        
            const { type, params } = await AuthSession.startAsync({ authUrl });

            if(type==='success') {
                const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${ params.access_token }`);
                const userInfo = await response.json();

                const userLogged = {
                    id: userInfo.id,
                    email: userInfo.email,
                    name: userInfo.name,
                    photo: userInfo.picture,
                    type: 'google'
                }

                setUser(userLogged);
                await AsyncStorage.setItem(keyAsyncStorage, JSON.stringify(userLogged));

                console.log(userLogged);
            }

        } catch(error) {
            Alert.alert("Erro na autenticação.");
        }
    }

    async function logout(){
        setUser();
        await AsyncStorage.removeItem(keyAsyncStorage);
    }

    async function loadData() {
        const userStorage = await AsyncStorage.getItem(keyAsyncStorage);

        if(userStorage) {
            const userLogged = JSON.parse(userStorage);
            setUser(userLogged);
        }
    }

    async function clear() {
        await AsyncStorage.clear();
    }

    useEffect(() => {
        loadData();
        setUserLoading(false);
    }, []);

    return (
        <AuthContext.Provider value={{ user, userLoading, handleSignWithSuap, handleSignWithGoogle, logout }}>
            { children }
        </AuthContext.Provider>
    );
};

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth }