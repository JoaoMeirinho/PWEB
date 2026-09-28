const nome = prompt("Digite o nome do aluno");
const nota1 = prompt("Digite a primeira nota");
const nota2 = prompt("Digite a segunda nota");
const nota3 = prompt("Digite a terceira nota");
const nota4 = prompt("Digite a quarta nota");

const media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4;

alert(`A média do aluno ${nome} é ${media.toFixed(2)}`);