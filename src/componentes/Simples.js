import React from 'react'
import { View, Text } from 'react-native'
import padrao from '../estilo/padrao';

//{} = serve para ser interpretado os comandos dentro dele
export default function (props) {
    //Colocando o "padrao.ex" dentro de um [] é possivel adicionar mais de um estilo 
    return (
        <View>
            <Text style={padrao.ex}>Function: {props.texto}</Text>
        </View>
    )
}
