import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './components/Styles'
import MineField from './components/MineField'
import params from './params'
import createMinesBoard from './functions'

export default class App extends Component {

  constructor (props) {
    super(props)
    this.state = this.createState()
  }

  /**
   * @returns seta o estado inicial
   */
  createState = () => {

    const columns = params.getCollumnsAmount()
    const rows = params.getRowsAmount()

    //Retorna o numero de minas do tabuleiro
    const minesAmount = Math.ceil(columns * rows * params.difficultLevel)

    return {
      board: createMinesBoard(rows, columns, minesAmount)
    }
  }

  render() {

    return (

      <View style={styles.containerApp}>
          <View style = {styles.board}>
            <MineField board = {this.state.board}></MineField>
          </View>
      </View>
    )
  }
}