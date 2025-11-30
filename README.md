# ❌⭕ React Jogo da Velha (Tic-Tac-Toe)

Este projeto é uma implementação simples e funcional do clássico Jogo da Velha, desenvolvido utilizando a biblioteca **React** para demonstrar o uso de componentes funcionais, gerenciamento de estado (`useState`) e passagem de propriedades (props) em um único arquivo HTML.

## 🚀 Como Executar

Como este é um projeto em **HTML puro** com scripts React e Babel incluídos via CDN (Content Delivery Network), a execução é extremamente simples.

1.  **Salve o código:** Certifique-se de que o código acima está salvo em um arquivo chamado `jogo_da_velha.html`.
2.  **Abra no Navegador:** Dê um **duplo clique** no arquivo `jogo_da_velha.html`.

O jogo será carregado instantaneamente em qualquer navegador moderno.

## ⚙️ Estrutura do Código

O código está dividido em três componentes principais, seguindo as melhores práticas do React:

1.  **`Square` (Componente Funcional):**
    * Representa cada um dos nove quadrados do tabuleiro.
    * Recebe o `value` ("X", "O" ou `null`) e a função de clique (`onSquareClick`) via props.

2.  **`Board` (Componente Funcional):**
    * Gerencia a exibição dos nove `Square`s em três linhas (`board-row`).
    * Contém a lógica de verificação de vitória (`calculateWinner`).
    * Exibe o `status` (próximo jogador ou vencedor).

3.  **`Game` (Componente de Nível Superior):**
    * **Gerencia o Estado Central:** Utiliza `useState` para manter o **histórico de jogadas** (`history`) e a jogada atual (`currentMove`).
    * **Controle de Tempo:** O histórico permite a funcionalidade de "Voltar no Tempo" (`jumpTo`), permitindo ao usuário navegar para qualquer ponto anterior do jogo.
    * Renderiza o `Board` e a lista de movimentos (`moves`).

### Função Principal (`calculateWinner`)

Esta função verifica todas as 8 combinações de vitória (três horizontais, três verticais e duas diagonais) em cada movimento, garantindo que o jogo seja encerrado assim que um jogador vencer.

---

## 📜 Licença

Este projeto é distribuído sob os termos da licença Creative Commons Attribution 4.0 International (CC BY 4.0). Veja o texto completo abaixo.
