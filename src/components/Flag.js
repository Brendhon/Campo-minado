import React from 'react'
import { View } from 'react-native'
import styles from './Styles'

export default props => {
    return (
        <View style = {styles.containerFlag}>
            <View style = {[styles.flagpole, props.bigger ? styles.flagpoleBigger: null]}></View>
            <View style = {[styles.flag, props.bigger ? styles.flagBigger: null]}></View>
            <View style = {[styles.base1, props.bigger ? styles.base1Bigger: null]}></View>
            <View style = {[styles.base2, props.bigger ? styles.base2Bigger: null]}></View>
        </View>
    )
}