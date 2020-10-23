import {StyleSheet} from 'react-native';



export const headerStyles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: "center",
        padding: 30
    },
    title : {
        fontSize: 36,
        fontWeight: '700',
        color: '#01c5c4'
    },
    subTitle : {
        fontSize: 16,
        color: '#a6a6a4'
    },
    line : {
        marginTop: 20,
        marginBottom: 20,
        width: 90,
        height: 3,
        borderRadius: 20,
        backgroundColor: 'grey'
    }


})