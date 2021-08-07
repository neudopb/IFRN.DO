import React from 'react';
import { View, Text } from 'react-native';
import GlobalStyles from '../styles/GlobalStyle';

export function Home( { navigation } ) {
    return (
        <View style={GlobalStyles.container}>
            <Text>Hello World</Text>
        </View>
    )
}