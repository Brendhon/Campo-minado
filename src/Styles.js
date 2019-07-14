import { StyleSheet, Dimensions } from 'react-native'

//Declaração dos estilos
export default StyleSheet.create({
    container: {
        flex: 1,
    },
    buttons: {
        flexDirection: 'row',
        flexWrap: "wrap",
    },
    button: {
        fontSize: 35,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 0.5,
        borderColor: '#888',
    },
    operationbutton: {
        backgroundColor: '#fa8231',
        textAlign: 'center',
        color: '#000000',
    },
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'flex-end',
    },
    displayValue: {
        fontSize: 50,
        color: '#fff',

    },
    buttonDouble: {
        borderColor: '#000000',
        width: (Dimensions.get('window').width / 4) * 2
    },
    buttonTriple: {
        borderColor: '#000000',
        width: (Dimensions.get('window').width / 4) * 3
    }
})