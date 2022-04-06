const velha = new jogo_da_velha
const tabuleiro = document.getElementById('tabuleiro')
const reset = document.getElementById('reset');
const resetScore = document.getElementById('reset-score')
const placarX = document.getElementById('X');
const placarO = document.getElementById('O');

//  JOGO
for (let i = 0; i < velha.casas.length; i++){
    const button = document.createElement('button')
    tabuleiro.appendChild(button);
    button.setAttribute('id',`casa${+i}`);
    button.addEventListener('click', () => {    
        if (velha.casas[i] === ''){
        button.innerText = velha.simbolos.opções[velha.simbolos.mudar_index]
        velha.casas[i] = button.innerText;
        }
        velha.simbolos.mudar_index = (velha.simbolos.mudar_index === 0 ? 1 : 0);
        velha.vitoria()
    });
    reset.addEventListener('click', () =>{
        button.innerText = '';
        velha.casas = ['', '', '', '', '', '', '', '', ''];
        velha.simbolos.mudar_index = 0
    });
    resetScore.addEventListener('click', () => {
        placarO.innerText = 0;
        placarX.innerText = 0
    })
}


