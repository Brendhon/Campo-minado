import { StyleSheet, Dimensions } from 'react-native'
import params from '../params'

//Declaração dos estilos
export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize,
    },
    regular: {
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333'
    },
    opened: {
        backgroundColor: '#999',
        borderColor: '#777',
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        fontWeight: 'bold',
        fontSize: params.fontSize
    },
    coreMine: {
        height: 14,
        width: 14,
        borderRadius: 10,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    line: {
        position: 'absolute',
        height: 3,
        width: 20,
        borderRadius: 3,
        backgroundColor: 'black',
    },
    exploded: {
        backgroundColor: 'red',
        borderColor: 'red',
    },
    containerFlag: {
        marginTop: 2,
    },
    flagpole: {
        position: 'absolute',
        height: 16,
        width: 3,
        backgroundColor:'#222',
        marginLeft: 9
    },
    flag: {
        position: 'absolute',
        height: 7,
        width: 8,
        backgroundColor: '#F22',
        marginLeft: 3  
    },
    base1: {
        position: 'absolute',
        height: 4,
        width: 8,
        backgroundColor: '#222',
        marginLeft: 7,
        marginTop: 10,
    },
    base2: {
        position: 'absolute',
        height: 4,
        width: 12,
        backgroundColor: '#222',
        marginLeft: 5,
        marginTop: 12,
    },
    flagpoleBigger: {
        height: 28,
        width: 4,
        marginLeft: 16
    },
    flagBigger: {
        height: 10,
        width: 14,
        marginLeft: 3  
    },
    base1Bigger: {
        height: 4,
        width: 12,
        marginLeft: 12,
        marginTop: 20,
    },
    base2Bigger: {
        height: 4,
        width: 20,
        marginLeft: 8,
        marginTop: 24,
    },
})