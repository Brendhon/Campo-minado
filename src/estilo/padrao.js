import React from 'react'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    ex: {
        paddingHorizontal: 15, // Eixo Horizontal
        marginVertical: 5, // Margem vertical
        borderRadius: 20, // Raio da borda
        borderWidth: 2, // Largura da borda
        borderColor: '#222', // Cor da borda
        fontSize: 18, // Tamanho da fonte
        fontWeight: 'bold', // Peso da fonte
        justifyContent: 'center',
        alignItems: 'center', //Alinhamento dos itens
    },
    input: {
        height: 70,
        fontSize: 40,
        borderColor: 'gray',
        borderWidth: 1
    },
    me: {
        paddingHorizontal: 15, // Eixo Horizontal
        marginVertical: 2, // Margem vertical
        borderRadius: 20, // Raio da borda
        borderWidth: 2, // Largura da borda
        borderColor: '#BDFFB5', // Cor da borda
        fontSize: 15, // Tamanho da fonte
        fontWeight: 'bold', // Peso da fonte
        justifyContent: 'center',
        alignItems: 'center', //Alinhamento dos itens
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#FFEFDB',
        padding: 5
    }
})
