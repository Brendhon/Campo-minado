import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './Styles'
import Field from './components/Field'

export default class App extends Component {

  render() {

    return (

      <View style = {styles.container}>
        <Field></Field>
        <Field opened></Field>
        <Field opened nearMines = {3}></Field>
      </View>
    )
  }
}