import React from 'react'
import { View } from 'react-native'
import styles from './Styles'

export default props => {
    return (
        <View style = {styles.container}>
            <View style = {styles.coreMine}></View>
            <View style = {styles.line}></View>
            <View style = {[styles.line, { transform: [{ rotate: '45deg'}] }]}></View>
            <View style = {[styles.line, { transform: [{ rotate: '90deg'}] }]}></View>
            <View style = {[styles.line, { transform: [{ rotate: '135deg'}] }]}></View>
        </View>
    )
}