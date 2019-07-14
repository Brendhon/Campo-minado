import React, { Component } from 'react'
import { View } from 'react-native'
import style from './Styles'
import Button from './components/Button'
import Display from './components/Display'
//import console = require('console');

//Criando o estado inicial
const initialstate = {

  displayValue: '0', //Setando o Valor Incial mostrado no Display
  clearDisplay: false, //Responsavel por limpar o display
  operation: null, //Responsavel por armazenar a opreração
  values: [0, 0], //Array que ira armazenar os valores digitados
  current: 0, //Posição do array values 

}

export default class App extends Component {

  //Setando o estado
  state = { ...initialstate }

  addDigit = numero => {

    //Verifica o tipo do 'displayValue' 
    //console.debug(typeof this.state.displayValue)

    //Validação para evitar ocorencias como '09790 || 00000' 
    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay

    //Validação para que não tenha mais de dois pontos na calculadora
    if (numero === '.' && !clearDisplay && this.state.displayValue.includes('.')) {
      return
    }

    //Validação para permitir colocar mais de um digito no display
    const currentValue = clearDisplay ? '' : this.state.displayValue

    //Transfromando em String para adicionar ao display
    const displayValue = currentValue.toString() + numero.toString()

    //Mostrando no Display
    this.setState({ displayValue, clearDisplay: false })

    if (numero !== '.') {
      //Retorna um número de ponto flutuante do mostrado no display e adiciona em uma constante
      const newValue = parseFloat(displayValue)

      //Criando um array clone do estado 'values' para armazenar o array 'values' do estado
      const values = [...this.state.values]

      //Adicionando na posição onde 'current' esta apontado o valor mostrado no Display
      values[this.state.current] = newValue

      //Setando o estado de values
      this.setState({ values })
    }
  }

  clearMemory = () => {

    //Setando os estados para os estados iniciais
    this.setState({ ...initialstate })
  }

  setOperation = operation => {

    if (this.state.current === 0)

      this.setState({

        operation, //Setando o operador para o operador passado
        current: 1, //Mudando a posição
        clearDisplay: true //Limpando o Display para o Proximo numero ser digitado

      })

    //Resolve a operação que ja foi setada no estado
    else {

      //Criando uma constante aux para verificar se a operação é '='
      const equals = operation === '='

      //Criando um array clone do estado 'values' para armazenar o array 'values' do estado
      const values = [...this.state.values]

      try {

        //Trasforma os dados em uma expressão e armazena em uma variavel
        const aux = values[0].toString() + this.state.operation + values[1].toString()

        //O método "eval" avalia código JavaScript representado como uma string.
        values[0] = eval(aux)

      } catch (e) {

        //Caso tenha erro na expressão nada irá ocorrer
        values[0] = this.state.values[0]

      }

      //Preparando a proxima possição
      values[1] = 0

      //Setando os resultados no estado
      this.setState({

        displayValue: values[0].toString(), //Setando o valor que sera mostrado no Display
        operation: equals ? null : operation, //Verificando se o operador é igual..senão sera passado outro operador para a proxima expressão
        current: equals ? 0 : 1, //Caso seja colocado outro simbolo para a proxima expressão o equals recebe "1"
        clearDisplay: equals, //Unica diferença da calculadora do Mac...O ultimo valor sera armazenado no display deixando-o para a proxima expressão
        values, //Atribuindo os valores do array clone 'values' no 'values' do estado 

      })
    }
  }

  render() {

    return (

      <View style={style.container}>

        <Display value={this.state.displayValue}></Display>

        <View style={style.buttons}>

          <Button label='AC' triple onClick={this.clearMemory}></Button>
          <Button label='/' operation onClick={() => this.setOperation('/')}></Button>
          <Button label='7' onClick={() => this.addDigit(7)}></Button>
          <Button label='8' onClick={() => this.addDigit(8)}></Button>
          <Button label='9' onClick={() => this.addDigit(9)}></Button>
          <Button label='*' operation onClick={() => this.setOperation('*')}></Button>
          <Button label='4' onClick={() => this.addDigit(4)}></Button>
          <Button label='5' onClick={() => this.addDigit(5)}></Button>
          <Button label='6' onClick={() => this.addDigit(6)}></Button>
          <Button label='-' operation onClick={() => this.setOperation('-')}></Button>
          <Button label='1' onClick={() => this.addDigit(1)}></Button>
          <Button label='2' onClick={() => this.addDigit(2)}></Button>
          <Button label='3' onClick={() => this.addDigit(3)}></Button>
          <Button label='+' operation onClick={() => this.setOperation('+')}></Button>
          <Button label='0' double onClick={() => this.addDigit(0)}></Button>
          <Button label='.' onClick={() => this.addDigit('.')}></Button>
          <Button label='=' operation onClick={() => this.setOperation('=')}></Button>

        </View>

      </View>
    )
  }
}
