import React, { Component } from 'react'
import { View, Text, Alert } from 'react-native'
import styles from './components/Styles'
import MineField from './components/MineField'
import params from './params'
import { createMinedBoard, cloneBoard, openField, 
  hadExplosion, wonGame, showMines, invertFlag, flagsUsed } from './functions'
import Header from './components/Header'
import LevelSelection from './screens/LevelSelection'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  /**
   * @returns {int} Numero de minas do tabuleiro
   */
  minesAmount = () => {
    
    const columns = params.getCollumnsAmount()
    const rows = params.getRowsAmount()

    return Math.ceil(columns * rows * params.difficultLevel)

  }

  /**
   * @returns O estado inicial
   */
  createState = () => {

    const columns = params.getCollumnsAmount()
    const rows = params.getRowsAmount()

    return {
      board: createMinedBoard(rows, columns, this.minesAmount()),
      won: false,
      lost: false,
      showLevelSelection: false
    }
  }

  /**
   * Abre o campo naquela posição
   * @param row linha
   * @param column coluna
   */
  onOpenField = (row, column) => {

    //Clonado o Tabuleiro
    const board = cloneBoard(this.state.board)

    //Abrindo o campo selecionado
    openField(board, row, column)

    //Controle de vitoria ou derrota
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if (lost) {
      showMines(board)
      Alert.alert('Sorry!', 'Game Over!')
    }
    if (won)
      Alert.alert('Congratulations!', 'You win!')

    //Atribuição no estado
    this.setState({ board, lost, won })
  }

  /**
   * Marca a posição
   * @param row linha
   * @param column coluna
   */
  onFlagField = (row, column) => {

    //Clonado o Tabuleiro
    const board = cloneBoard(this.state.board)

    //Removendo a flag
    invertFlag(board, row, column)

    //Verificando se o jogador ganhou
    const won = wonGame(board)

    if (won)
      Alert.alert('Congratulations!', 'You win!')

    this.setState({ board, won })
  }

  /**
   * Atualiza o nivel de dificuldade
   * @param level o nivel correspondente a escolha
   */
  onLevelSelected = level => {

    params.difficultLevel =  level
    this.setState(this.createState())

  }

  render() {

    return (
      <View style={styles.containerApp}>

        <LevelSelection isVisible = {this.state.showLevelSelection} onLevelSelected = {this.onLevelSelected} 
        onCancel = {() => this.setState({showLevelSelection: false})}></LevelSelection>

        <Header flagsLeft = {this.minesAmount() - flagsUsed(this.state.board)}
        onNewGame = {() => this.setState(this.createState())} onFlagPress = {() => this.setState({showLevelSelection: true})} ></Header>
        
        <View style={styles.board}>

          <MineField board={this.state.board} onOpenField={this.onOpenField} onFlagField = {this.onFlagField}></MineField>
        
        </View>
      
      </View>
    )
  }
}