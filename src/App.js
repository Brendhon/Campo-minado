//Importação das classes necessarias
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Simples from "./componentes/Simples"
import ParImpar from './componentes/ParImpar'
import { Inverter, MegaSena } from './componentes/Multi';

//Criando a classe App 
export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Simples texto ='I Belive I Can Fly'></Simples>
				<ParImpar numero = {38} ></ParImpar>
				<Inverter texto = 'adrogadagorda'></Inverter>
				<MegaSena numeros = {5}></MegaSena>
			</View>
		)
	}
}

//Defindo o estilo
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})
