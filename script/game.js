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
    vitoria(placarX, placarO){
    if(((this.casas[0] === 'X' && this.casas[1] === 'X' && this.casas[2] === 'X')) ||
        ((this.casas[0] === 'X' && this.casas[4] === 'X' && this.casas[8] === 'X')) ||
        ((this.casas[0] === 'X' && this.casas[3] === 'X' && this.casas[6] === 'X')) ||
        ((this.casas[1] === 'X' && this.casas[4] === 'X' && this.casas[7] === 'X')) ||
        ((this.casas[2] === 'X' && this.casas[5] === 'X' && this.casas[8] === 'X')) ||
        ((this.casas[2] === 'X' && this.casas[4] === 'X' && this.casas[6] === 'X')) ||
        ((this.casas[3] === 'X' && this.casas[4] === 'X' && this.casas[5] === 'X')) ||
        ((this.casas[6] === 'X' && this.casas[7] === 'X' && this.casas[8] === 'X'))){
            for (let i = 0; i < this.casas.length; i++){
                if((this.casas[i] !== 'X') || (this.casas[i] !== 'O')){
                    this.casas[i] = ' '
                }
            }
            return placarX.innerText = Number(placarX.innerText) + 1;
        } else if(((this.casas[0] === 'O' && this.casas[1] === 'O' && this.casas[2] === 'O')) ||
        ((this.casas[0] === 'O' && this.casas[4] === 'O' && this.casas[8] === 'O')) ||
        ((this.casas[0] === 'O' && this.casas[3] === 'O' && this.casas[6] === 'O')) ||
        ((this.casas[1] === 'O' && this.casas[4] === 'O' && this.casas[7] === 'O')) ||
        ((this.casas[2] === 'O' && this.casas[5] === 'O' && this.casas[8] === 'O')) ||
        ((this.casas[2] === 'O' && this.casas[4] === 'O' && this.casas[6] === 'O')) ||
        ((this.casas[3] === 'O' && this.casas[4] === 'O' && this.casas[5] === 'O')) ||
        ((this.casas[6] === 'O' && this.casas[7] === 'O' && this.casas[8] === 'O'))){
            for (let i = 0; i < this.casas.length; i++){
                if((this.casas[i] !== 'X') || (this.casas[i] !== 'O')){
                    this.casas[i] = ' '
                }
            }
            return placarO.innerText = Number(placarO.innerText) + 1;; 
        };
    }
    // INTELIGENCIA ARTIFICIAL
    inteligencia(array, ){
        if(array[0] === 'X'){
            array[4] = 'O'
        }  
}
}



