import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import padrao from '../estilo/padrao'


export default class Contador extends Component {

    state = {
        numero: this.props.numeroInicial
    }
    maisUm = () => {
        this.setState({ numero: this.state.numero + 1 })
    }
    zerar = () => {
        this.setState({ numero: this.props.numeroInicial })
    }

    render() {
        return (
            <View>
                <Text style={padrao.ex}>{this.state.numero}</Text>
                <TouchableHighlight
                    style={padrao.button}
                    onPress={this.maisUm}
                    onLongPress={this.zerar}
                    underlayColor='#BDFFB5'>
                    <Text>Incrementar/Zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}