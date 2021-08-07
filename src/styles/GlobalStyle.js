import { StyleSheet } from "react-native";
import MyTheme from './MyTheme';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: MyTheme.colors.primary,
    }
});