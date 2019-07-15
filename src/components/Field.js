import React from 'react'
import { View, Text } from 'react-native'
import styles from '../Styles'

export default props => {

    //Declaração de Variaveis
    const { mined, opened, nearMines } = props
    const styleFild = [styles.field]
    let color = null

    //Definindo os estilos
    if (opened)
        styleFild.push(styles.opened)

    if (styleFild.length === 1)
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

    const show = () => {

        if (!mined && opened && nearMines > 0)
            return (
                <Text style={[styles.label, { color: color }]}>
                    {nearMines}
                </Text>
            )
        else
            return false

    }

    return (
        <View style={styleFild}>
            {/* Caso não tenha mina, o campo esteja aberto e o numero de minas 
            proximas forem maior que '0' sera mostrado numero de minas proximo */}
            {/* !mined && opened && nearMines > 0 ?
                <Text style={[style.label, { color: color }]}>
                    {nearMines}
                </Text> : false */}
            {show()}
        </View>
    )
}