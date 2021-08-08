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
    
    
    
    container: {
        flex: 1,
        backgroundColor: MyTheme.colors.background,
    },
    containerHeader: {
        height: 175,
        justifyContent: 'center',
        backgroundColor: MyTheme.colors.primary,
    },
    containerBody: {
        flex: 1,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: MyTheme.colors.background,
    },
    textHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 30,
    },
    tituloHome: {
        fontSize: 25,
        color: MyTheme.colors.white,
        fontWeight: 'bold',
    },
    txtTarefas: {
        fontSize: 16,
        color: MyTheme.colors.white,
    },
});