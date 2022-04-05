const tabuleiro = document.getElementById('tabuleiro')
const reset = document.getElementById('reset');
const placarX = document.getElementById('X');
const placarO = document.getElementById('O');
//  TABULEIRO
const velha = {
    casas: ['', '', '', '', '', '', '', '', ''],
    simbolos: {
        opções: ['X', 'O'],
        mudar_index: 0,
        }   
}
//  JOGO
for (let i = 0; i < velha.casas.length; i++){
    let button = document.createElement('button');
    tabuleiro.appendChild(button);
    button.setAttribute('id',`casa${+i}`);
    button.addEventListener('click', () => {    
        if (button.innerText === ''){
        button.innerText = velha.simbolos.opções[velha.simbolos.mudar_index]
        velha.casas[i] = button.innerText;
        }
        velha.simbolos.mudar_index = (velha.simbolos.mudar_index === 0 ? 1 : 0);
        vitoria()
    });
    reset.addEventListener('click', () => {
        button.innerText = '';
        velha.casas = ['', '', '', '', '', '', '', '', ''];
        velha.simbolos.mudar_index = 0
    });
}
// CONDIÇÕES
function vitoria(){
    if(((velha.casas[0] === 'X' && velha.casas[1] === 'X' && velha.casas[2] === 'X')) ||
        ((velha.casas[0] === 'X' && velha.casas[4] === 'X' && velha.casas[8] === 'X')) ||
        ((velha.casas[0] === 'X' && velha.casas[3] === 'X' && velha.casas[6] === 'X')) ||
        ((velha.casas[1] === 'X' && velha.casas[4] === 'X' && velha.casas[7] === 'X')) ||
        ((velha.casas[2] === 'X' && velha.casas[5] === 'X' && velha.casas[8] === 'X')) ||
        ((velha.casas[2] === 'X' && velha.casas[4] === 'X' && velha.casas[6] === 'X')) ||
        ((velha.casas[3] === 'X' && velha.casas[4] === 'X' && velha.casas[5] === 'X')) ||
        ((velha.casas[6] === 'X' && velha.casas[7] === 'X' && velha.casas[8] === 'X'))){
            return placarX.innerText = Number(placarX.innerText) + 1;
        } else if(((velha.casas[0] === 'O' && velha.casas[1] === 'O' && velha.casas[2] === 'O')) ||
        ((velha.casas[0] === 'O' && velha.casas[4] === 'O' && velha.casas[8] === 'O')) ||
        ((velha.casas[0] === 'O' && velha.casas[3] === 'O' && velha.casas[6] === 'O')) ||
        ((velha.casas[1] === 'O' && velha.casas[4] === 'O' && velha.casas[7] === 'O')) ||
        ((velha.casas[2] === 'O' && velha.casas[5] === 'O' && velha.casas[8] === 'O')) ||
        ((velha.casas[2] === 'O' && velha.casas[4] === 'O' && velha.casas[6] === 'O')) ||
        ((velha.casas[3] === 'O' && velha.casas[4] === 'O' && velha.casas[5] === 'O')) ||
        ((velha.casas[6] === 'O' && velha.casas[7] === 'O' && velha.casas[8] === 'O'))){
            return placarO.innerText = Number(placarO.innerText) + 1;; 
        }
}



