import React from 'react'
import { View } from 'react-native'
import styles from './Styles'
import Field from './Field'

/**
 * Pega cada elemento da matriz e transforma em JSX correspondente
 * @returns retora os JSX correspondentes aos parametros passados 
 * @param props Recebe o tabuleiro com as minas espalhadas
 */
export default props => {

    //Armazena as linhas em JSX na constante 'rows'
    const rows = props.board.map((row, r) => {

        //Armazena as colunas JSX na constante 'columns'
        const columns = row.map((field, c) => {
            return <Field {...field} key={c}></Field>
        })
        return <View key={r} style={{flexDirection: 'row'}}>
            {columns}
        </View>
    })
    return <View style={styles.containerMineField}>
        {rows}
    </View>
}