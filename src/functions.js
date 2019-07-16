import params from './params'

/**
 * Criar uma Matriz que ira representar o tabuleiro
 * @returns Uma Matriz onde cada elemento possui os atributos (row, column, opened...)
 * @param rows Quantidade de linhas
 * @param columns Quantidade de Colunas
 */
const createBoard = (rows, columns) => {

    //Gerando um array com 'rows' linhas e zerando seus componentes
    return Array(rows).fill(0).map((_, row) => {

        //Gerando um array dentro de cada elemento do Array gerado anteriormente 
        return Array(columns).fill(0).map((_, column) => {

            return {

                //Cada elemento dessa matriz tera esses atributos
                row,
                column,
                opened: false,
                flagged: false,
                mined: false,
                exploded: false,
                nearMines: 0,
            }
        })
    })
}

/**
 * Espalha as minas pelo tabuleiro
 * @returns Retorna
 * @param board Recebe o resultado da função createBoard() 
 * @param minesAmount Recebe a quantidade de minas
 */
const spreadMines = (board, minesAmount) => {

    //Declaração de Variaveis
    const rows = board.length //Quantidade de linhas
    const columns = board[0].length //Quantidade de colunas
    let minesPlanted = 0

    //Sair apenas quando toda quantidade de minas(minesAmount) estiver plantadas no tabuleiro
    while (minesPlanted < minesAmount) {

        //De modo aleatório gera um valor de 0 ao numero de Linhas na base 10
        const rowSel = parseInt(Math.random() * rows, 10)

        //De modo aleatório gera um valor de 0 ao numero de Colunas na base 10 
        const columnSel = parseInt(Math.random() * columns, 10)

        //Verifica se tem uma mina plantada caso não será plantada
        if (!board[rowSel][columnSel].mined) {
            board[rowSel][columnSel].mined = true
            minesPlanted++
        }
    }
}
/**
 * Irá chamar as duas funções anteriores criando um tabuleiro minado de forma Aleatória
 * @returns O tabuleiro com o campo já minado
 * @param rows Quantidade de linhas
 * @param columns Quantidade de Colunas
 * @param minesAmount Recebe a quantidade de minas
 */
export default createMinesBoard = (rows, columns, minesAmount) => {

    //Chamando a primeira função
    const board = createBoard(rows, columns)

    //Chamando a segunda função
    spreadMines(board, minesAmount)

    return board

}

// /**
//  * @returns retorna o numero de bombas que terá no tabuleiro
//  */
// minesAmount = () => {

//     const columns = params.getCollumnsAmount()
//     const rows = params.getRowsAmount()

//     return 
// }