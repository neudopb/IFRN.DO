import { StyleSheet } from "react-native";
import MyTheme from './MyTheme';

export default StyleSheet.create({
    containerLogin: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: MyTheme.colors.primary,
    },
    imgIf: {
        height: 100,
        width: 80,
        marginTop: 120,
    },
    titulo: {
        fontSize: 40,
        fontWeight: 'bold',
        color: MyTheme.colors.white,
        marginTop: 20,
        marginBottom: 70,
    },
    inputLogin: {
        height: 45,
        width: '70%',
        margin: 10,
        borderRadius: 10,
        paddingLeft: 20,
        fontSize: 18,
        backgroundColor: MyTheme.colors.white,
    },
    btn: {
        height: 50,
        width: '70%',
        margin: 20,
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: MyTheme.colors.gray
    },
    textBtn: {
        fontSize: 20,
        color: MyTheme.colors.white,
    },
    container: {
        flex: 1,
    },
    containerHomeHeader: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: MyTheme.colors.primary,
    },
    containerHomeBody: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: MyTheme.colors.background,
    },
    textHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 30,
    },
    tituloHome: {
        fontSize: 25,
        color: MyTheme.colors.white,
        fontWeight: 'bold',
    },
    txtTarefas: {
        fontSize: 15,
        color: MyTheme.colors.white,
    },
});