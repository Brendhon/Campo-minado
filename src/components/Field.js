import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import styles from './Styles'
import Mine from './Mine'
import Flag from './Flag'

export default props => {

    //Declaração de Variaveis
    const { mined, opened, nearMines, exploded, flagged } = props
    const styleFild = [styles.field]
    let color = null

    //Definindo os estilos
    if (opened)
        styleFild.push(styles.opened)

    if (exploded)
        styleFild.push(styles.exploded)

    if (flagged)
        styleFild.push(styles.flagged, styles.regular)

    if (!opened && !exploded)
        styleFild.push(styles.regular)

    //Dependendo do numeros de minas proximos o label ira receber uma cor diferente
    if (nearMines === 1)
        color = '#2A28D7'
    if (nearMines === 2)
        color = '#2B520F'
    if (nearMines > 2 && nearMines < 6)
        color = '#F9060A'
    if (nearMines >= 6)
        color = '#F221A9'

    const showNum = () => {

        //Outro Método
        /* {!mined && opened && nearMines > 0 ? <Text style={[style.label, { color: color }]}>
        {nearMines} </Text> : false} */

        if (!mined && opened && nearMines > 0)
            return (
                <Text style={[styles.label, { color: color }]}>
                    {nearMines}
                </Text>
            )
        else
            return false

    }

    const showMine = () => {

        if (mined && opened)
            return (
                <Mine></Mine>
            )
        else
            return false

    }

    const showFlag = () => {

        if (flagged && !opened)
            return (
                <Flag></Flag>
            )
        else
            return false

    }

    return (
        <TouchableWithoutFeedback onPress={props.onOpen} onLongPress = {props.onFlag}>
            <View style={styleFild}>
                {showNum()}
                {showMine()}
                {showFlag()}
            </View>
        </TouchableWithoutFeedback>
    )
}