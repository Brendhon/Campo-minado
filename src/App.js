import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './components/Styles'
import Field from './components/Field'

export default class App extends Component {

  render() {

    return (

      <View style = {styles.container}>
        <Field></Field>
        <Field opened></Field>
        <Field opened nearMines = {3}></Field>
        <Field mined></Field>
        <Field mined opened></Field>
        <Field mined opened exploded></Field>
        <Field flagged></Field>
      </View>
    )
  }
}