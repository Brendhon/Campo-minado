import React from 'react'
import style from '../Styles'
import { Text, TouchableHighlight } from 'react-native'

export default props => {

    const styleButton = [style.button]

    //Se a propriedade double for verdadeira adiciona o estilo "buttonDouble" no array de estilo
    if (props.double)
        styleButton.push(style.buttonDouble)

    //Se a propriedade double for verdadeira adiciona o estilo "buttonDouble" no array de estilo
    if (props.triple)
        styleButton.push(style.buttonTriple)

    //Se a propriedade double for verdadeira adiciona o estilo "buttonDouble" no array de estilo
    if (props.operation)
        styleButton.push(style.operationbutton)

    return (

        //Ao ativar o onPress a função onClick sera chamada
        <TouchableHighlight onPress={props.onClick}>
            
            {/*Definindo o estilo do botão atraves do Array*/}
            <Text style={styleButton}>

                {props.label}

            </Text>

        </TouchableHighlight>
    )
}