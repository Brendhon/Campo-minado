import React from 'react'
import { View, Text } from 'react-native'
import padrao from '../estilo/padrao';

export default function (props) {
    return (
        <View>
            {
                props.numero % 2 == 0
                    ? <Text style={padrao.ex}>Par</Text> // ? true 
                    : <Text style={padrao.ex}>Impar</Text> // : false
            }
        </View>
    )

}