// Funções e componentes para o Jogo da Velha (Tic-Tac-Toe)

// 1. Componente Square
function Square({ value, onClick }) { //
 return (
  <button className="square" onClick={onClick}> //
   {value} //
  </button>
 );
}

// 2. Função utilitária para verificar o vencedor
function calculateWinner (squares) { //
    const lines = [ //
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Linhas horizontais [cite: 103]
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Linhas verticais [cite: 104]
        [0, 4, 8], [2, 4, 6]            // Linhas diagonais [cite: 105]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) { //
            return squares[a]; //
        }
    }
    return null; //
}

// 3. Componente Board
function Board({ squares, onPlay, xIsNext }) { //
    const nextValue = xIsNext ? "X" : "O"; //
    const winner = calculateWinner(squares); //
    const status = winner //
        ? `Vencedor: ${winner}` //
        : `Próximo jogador: ${nextValue}`; //

    function handleClick(i) { //
        if (squares[i] || winner) return; //
        
        const nextSquares = squares.slice(); // Imutabilidade de arrays (slice()) [cite: 117]
        nextSquares[i] = nextValue; //
        onPlay(nextSquares); //
    }

    // Função auxiliar para renderizar uma linha do tabuleiro
    const renderBoardRow = (startIndex) => (
        <div className="board-row">
            {[0, 1, 2].map(col => {
                const i = startIndex + col;
                return (
                    <Square 
                        key={i} 
                        value={squares[i]} 
                        onClick={() => handleClick(i)} 
                    />
                );
            })}
        </div>
    );

    return (
        <>
            <div className="status">{status}</div> //
            {renderBoardRow(0)}
            {renderBoardRow(3)}
            {renderBoardRow(6)}
        </>
    );
}

// 4. Componente Game
function Game() { //
    // useState para histórico e movimento atual [cite: 116]
    const [history, setHistory] = React.useState([Array(9).fill(null)]); //
    const [currentMove, setCurrentMove] = React.useState(0); //
    
    const xIsNext = currentMove % 2 === 0; //
    const currentSquares = history[currentMove]; //

    // Função de callback para atualizar o estado do tabuleiro no Game (Lifting State Up)
    function handlePlay(nextSquares) { //
        // Garante que o histórico futuro seja descartado ao voltar no tempo e jogar novamente
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]; //
        setHistory(nextHistory); //
        setCurrentMove(nextHistory.length - 1); //
    }

    // Função para pular para um movimento específico (Time Travel)
    function jumpTo(move) { //
        setCurrentMove(move); //
    }

    // Mapeia o histórico para criar a lista de movimentos
    const moves = history.map((_, move) => { //
        const description = move //
            ? `Ir para jogada #${move}` //
            : "Início do jogo"; //
        return (
            <li key={move}> //
                <button onClick={() => jumpTo(move)}>{description}</button> //
            </li>
        );
    });

    return (
        <div className="game"> //
            <div className="game-board"> //
                <Board //
                    squares={currentSquares} //
                    onPlay={handlePlay} //
                    xIsNext={xIsNext} //
                />
            </div>
            <div className="game-info"> //
                <ol>{moves}</ol> //
            </div>
        </div>
    );
}

// 5. Renderização do Componente Principal
const root = ReactDOM.createRoot(document.getElementById("root")); //
root.render(<Game />); //