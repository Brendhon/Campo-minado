import { Dimensions } from 'react-native'

export default params = {

    blockSize: 32,
    borderSize: 5, 
    fontSize: 18,
    hearderRadio: 0.15, //Proporção do Painel Superior na tela
    difficultLevel: 0.1,
    
    getCollumnsAmount() {

        //Pega a largura da janela
        const width = Dimensions.get('window').width

        //Retorna o numero de blocos (depende diretamente da largura da tela do celular)
        return Math.floor(width / this.blockSize)
    },

    getRowsAmount(){

        //Pega a Altura total disponivel da janela 
        const height = (Dimensions.get('window').height)*0.85

        //Retorna o numero de blocos (depende diretamente da altura disponivel da tela do celular)
        return Math.floor(height / this.blockSize)

    }
}