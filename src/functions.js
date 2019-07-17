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
                nearMines: 0
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

        //Verifica se tem uma mina plantada caso não será plantada uma
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
const createMinedBoard = (rows, columns, minesAmount) => {

    //Chamando a primeira função
    const board = createBoard(rows, columns)
    
    //Chamando a segunda função
    spreadMines(board, minesAmount)

    return board

}

/**
 * @returns retorna um clone do tabuleiro
 * @param board tabuleiro
 */
const cloneBoard = board => {
    return board.map(rows => {
        return rows.map(field => {
            return { ...field }
        })
    })
}

/**
 * @returns Vizinhos da possição escolhida
 * @param board tabuleiro
 * @param row linhas
 * @param column colunas
 */
const getNeighbors = (board, row, column) => {

    //Verificação se os vizinhos são validos
    const neighbors = []
    const rows = [row - 1, row, row + 1]
    const columns = [column - 1, column, column + 1]
    rows.forEach(r => {
        columns.forEach(c => {
            const different = r !== row || c !== column
            const validRow = r >= 0 && r < board.length
            const validColumn = c >= 0 && c < board[0].length
            if (different && validRow && validColumn)
                neighbors.push(board[r][c])
        })
    })
    return neighbors
}

/**
 * @returns {boolean} segurança da vizinhança
 * @param board tabuleiro
 * @param row linhas
 * @param column colunas
 */
const safeNeighborhood = (board, row, column) => {
    const safes = (result, neighbor) => result && !neighbor.mined
    return getNeighbors(board, row, column).reduce(safes, true)
}

/**
 * @param board tabuleiro
 * @param row linhas
 * @param column colunas
 */
const openField = (board, row, column) => {

    const field = board[row][column]

    if (!field.opened) {
        field.opened = true

        if (field.mined) {
            field.exploded = true
        }
        else if (safeNeighborhood(board, row, column)) {
            getNeighbors(board, row, column).forEach(n => openField(board, n.row, n.column))
        }
        else {
            const neighbors = getNeighbors(board, row, column)
            field.nearMines = neighbors.filter(n => n.mined).length
        }
    }
}

/**
 * @returns a matriz em forma de linhas
 * @param board tabuleiro
 */
const fields = board => [].concat(...board)

/**
 * Se o campo foi exolidido ou não
 * @returns {boolean} 
 * @param board tabuleiro
 */
const hadExplosion = board => fields(board).filter(field => field.exploded).length > 0

/**
 * Se a algo pendente 
 * @returns {boolean} 
 * @param field campo 
 */
const pendding = field => (field.mined && !field.flagged) || (!field.mined && !field.opened)

/**
 * Verifica se o jogador ganhou o jogo
 * @returns {boolean}
 * @param board tabuleiro
 */
const wonGame = board => fields(board).filter(pendding).length === 0


/**
 * Deixa todas as bombas visíveis
 * @param board tabuleiro
 */
const showMines = board => fields(board).filter(field => field.mined).forEach(field => field.opened = true)

/**
 * Retira a bandeira
 * @param board tabuleiro
 * @param row linhas
 * @param column colunas
 */
const invertFlag = (board, row, column) => {
    const field = board[row][column]
    field.flagged = !field.flagged
}

/**
 * Verifica quantas flags foram colocadas no jogo
 * @param board tabuleiro
 */
const flagsUsed = board => fields(board)
    .filter(field => field.flagged).length

export { 
    createMinedBoard,
    cloneBoard,
    openField,
    hadExplosion,
    wonGame,
    showMines,
    flagsUsed,
    invertFlag
}