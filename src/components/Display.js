import React from 'react'
import { View, Text } from 'react-native'
import style from '../Styles'

export default props => {

    return (

        <View style={style.display}>

            {/*Defininfo o estilo do Display e seu numero de linhas*/}
            <Text style={style.displayValue} numberOfLines={1}>

                {props.value}

            </Text>
        </View>
    )
}