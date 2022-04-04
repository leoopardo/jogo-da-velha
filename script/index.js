const tabuleiro = document.getElementById('tabuleiro')
const reset = document.getElementById('reset')

const velha = {
    casas: ['', '', '', '', '', '', '', '', ''],
    simbolos: {
        opções: ['X', 'O'],
        mudar_index: 0,
        }

}

for (let i = 0; i < velha.casas.length; i++){
    let button = document.createElement('button')
    button.setAttribute('id','casa')
    button.addEventListener('click', () => {    
        button.innerText = velha.simbolos.opções[velha.simbolos.mudar_index]
        velha.simbolos.mudar_index = (velha.simbolos.mudar_index === 0 ? 1 : 0)
    });
    tabuleiro.appendChild(button)
}
