import React from 'react'
import { View, Text } from 'react-native'
import padrao from '../estilo/padrao'

const Inverter = function (props) {

    //split = transfroma a String em Array  
    //reverse = ele reverte o array (final vai pro começo e assim vai) 
    //join = trasfroma novamente em uma String
    const inv = props.texto.split('').reverse('').join('');

    return <Text style={padrao.ex}>{inv}</Text>
}

const MegaSena = function (props) {
    
    //Declarando o minimo e o maximo associando cada elemento de um array a uma variavel. Exemplo: min = 1 e max = 60
    const [min, max] = [1, 60]
    //Gera um array de props.numeros (numero passado por referencia caso não seja passado nada sera conciderado tamanho 6) de elementos zerados
    const numeros = Array(props.numeros || 6).fill(0)

    for (let i = 0; i < numeros.length; i++) {

        let novo = 0
        while (numeros.includes(novo)) {
            //Math.floor(x) retorna o menor número inteiro dentre o número "x".
            //Math.random() retorna um número pseudo-aleatório no intervalo [0, 1[
            novo = Math.floor(Math.random() * (max - min + 1) + min)
        }
        numeros[i] = novo
    }
    //sort() = ordena..porem trasforma em String usando a função ((a,b) => a - b) ele ira retornar o valor em INT
    numeros.sort((a, b) => a - b)
    //Retornar o array de numeros tranformando em String.
    //(', ') = ao Trasformar o array em String cada elemento do array sera separado do outro por virgula e espaço
    return <Text style={padrao.ex}>{numeros.join(', ')}</Text>
}

export {Inverter, MegaSena}