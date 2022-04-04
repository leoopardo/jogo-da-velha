const tabuleiro = document.getElementById('tabuleiro')
// const casa1 = document.getElementById('casa1')
// const casa2 = document.getElementById('casa2')
// const casa3 = document.getElementById('casa3')
// const casa4 = document.getElementById('casa4')
// const casa5 = document.getElementById('casa5')
// const casa6 = document.getElementById('casa6')
// const casa7 = document.getElementById('casa7')
// const casa8 = document.getElementById('casa8')
// const casa9 = document.getElementById('casa9')
const reset = document.getElementById('reset')

const velha = {
    casas: ['', '', '', '', '', '', '', '', ''],
    simbolos: {
        opções: ['X', 'O'],
        mudar_index: 0,
        mudar: function(){
            this.mudar_index = (this.mudar_index --- 0 ? 1 : 0)
        }
    }
}
for ([i] in velha.casas){
    let button = document.createElement('button')
    button.setAttribute('id','casa')
    button.addEventListener('click', () => {
        velha.simbolos.mudar()
        button.innerText = velha.simbolos.opções[mudar_index]
    }) 
    tabuleiro.appendChild(button)
}


// casa1.addEventListener('click', () => {
//     if(casa1.innerText = ' '){
//         casa1.innerText = 'X'
//     }
// })
// casa2.addEventListener('click', () => {
//     if(casa2.innerText = ' '){
//         casa2.innerText = 'X'
//     }
// })
// casa3.addEventListener('click', () => {
//     if(casa3.innerText = ' '){
//         casa3.innerText = 'X'
//     }
// })
// casa4.addEventListener('click', () => {
//     if(casa4.innerText = ' '){
//         casa4.innerText = 'X'
//     }
// })
// casa5.addEventListener('click', () => {
//     if(casa5.innerText = ' '){
//         casa5.innerText = 'X'
//     }
// })
// casa6.addEventListener('click', () => {
//     if(casa6.innerText = ' '){
//         casa6.innerText = 'X'
//     }
// })
// casa7.addEventListener('click', () => {
//     if(casa7.innerText = ' '){
//         casa7.innerText = 'X'
//     }
// })
// casa8.addEventListener('click', () => {
//     if(casa8.innerText = ' '){
//         casa8.innerText = 'X'
//     }
// })
// casa9.addEventListener('click', () => {
//     if(casa9.innerText = ' '){
//         casa9.innerText = 'X'
//     }
// })

