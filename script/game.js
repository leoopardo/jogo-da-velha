//  TABULEIRO
class jogo_da_velha {
    constructor(casas, simbolos){
        this.casas = ['', '', '', '', '', '', '', '', ''];
        this.simbolos = {
        opções: ['X', 'O'],
        mudar_index: 0,
        };   
    };
    // CONDIÇÕES
    vitoria(){
    if(((velha.casas[0] === 'X' && velha.casas[1] === 'X' && velha.casas[2] === 'X')) ||
        ((velha.casas[0] === 'X' && velha.casas[4] === 'X' && velha.casas[8] === 'X')) ||
        ((velha.casas[0] === 'X' && velha.casas[3] === 'X' && velha.casas[6] === 'X')) ||
        ((velha.casas[1] === 'X' && velha.casas[4] === 'X' && velha.casas[7] === 'X')) ||
        ((velha.casas[2] === 'X' && velha.casas[5] === 'X' && velha.casas[8] === 'X')) ||
        ((velha.casas[2] === 'X' && velha.casas[4] === 'X' && velha.casas[6] === 'X')) ||
        ((velha.casas[3] === 'X' && velha.casas[4] === 'X' && velha.casas[5] === 'X')) ||
        ((velha.casas[6] === 'X' && velha.casas[7] === 'X' && velha.casas[8] === 'X'))){
            for (let i = 0; i < this.casas.length; i++){
                if((this.casas[i] !== 'X') || (this.casas[i] !== 'O')){
                    this.casas[i] = ' '
                }
            }
            return placarX.innerText = Number(placarX.innerText) + 1;
        } else if(((velha.casas[0] === 'O' && velha.casas[1] === 'O' && velha.casas[2] === 'O')) ||
        ((velha.casas[0] === 'O' && velha.casas[4] === 'O' && velha.casas[8] === 'O')) ||
        ((velha.casas[0] === 'O' && velha.casas[3] === 'O' && velha.casas[6] === 'O')) ||
        ((velha.casas[1] === 'O' && velha.casas[4] === 'O' && velha.casas[7] === 'O')) ||
        ((velha.casas[2] === 'O' && velha.casas[5] === 'O' && velha.casas[8] === 'O')) ||
        ((velha.casas[2] === 'O' && velha.casas[4] === 'O' && velha.casas[6] === 'O')) ||
        ((velha.casas[3] === 'O' && velha.casas[4] === 'O' && velha.casas[5] === 'O')) ||
        ((velha.casas[6] === 'O' && velha.casas[7] === 'O' && velha.casas[8] === 'O'))){
            for (let i = 0; i < this.casas.length; i++){
                if((this.casas[i] !== 'X') || (this.casas[i] !== 'O')){
                    this.casas[i] = ' '
                }
            }
            return placarO.innerText = Number(placarO.innerText) + 1;; 
        };
    }
}

