import React from 'react';
import { Checkbox } from 'react-native-paper';
import MyTheme from '../styles/MyTheme';

export function CheckBox(props) {
    return (
        <Checkbox
            color={MyTheme.colors.primary}
            status={props.isChecked ? 'checked' : 'unchecked'}
            onPress={props.onPress}
        />
    );
};