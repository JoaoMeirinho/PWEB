const opcoes = ['Pedra', 'Papel', 'Tesoura'];

const escolhaUsuarioEl = document.getElementById('escolha-usuario');
const escolhaComputadorEl = document.getElementById('escolha-computador');
const resultadoEl = document.getElementById('mensagem-resultado');

const btnPedra = document.getElementById('pedra');
const btnPapel = document.getElementById('papel');
const btnTesoura = document.getElementById('tesoura');

function jogar(escolhaUsuario) {
    const indiceAleatorio = Math.floor(Math.random() * opcoes.length);
    const escolhaComputador = opcoes[indiceAleatorio];


    escolhaUsuarioEl.textContent = escolhaUsuario;
    escolhaComputadorEl.textContent = escolhaComputador;


    if (escolhaUsuario === escolhaComputador) {
        resultadoEl.textContent = 'Empate!';
        resultadoEl.className = 'empate';
    } else if (
        (escolhaUsuario === 'Pedra' && escolhaComputador === 'Tesoura') ||
        (escolhaUsuario === 'Papel' && escolhaComputador === 'Pedra') ||
        (escolhaUsuario === 'Tesoura' && escolhaComputador === 'Papel')
    ) {
        resultadoEl.textContent = 'Você ganhou!';
        resultadoEl.className = 'vitoria';
    } else {
        resultadoEl.textContent = 'Você perdeu!';
        resultadoEl.className = 'derrota';
    }
}

btnPedra.addEventListener('click', () => jogar('Pedra'));
btnPapel.addEventListener('click', () => jogar('Papel'));
btnTesoura.addEventListener('click', () => jogar('Tesoura'));
