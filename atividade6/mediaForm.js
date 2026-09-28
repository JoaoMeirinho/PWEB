function calcularMedia(){
    event.preventDefault();
    const nota1 = document.getElementById("nota1").value;
    const nota2 = document.getElementById("nota2").value;
    const nota3 = document.getElementById("nota3").value;
    const nota4 = document.getElementById("nota4").value;

    const media = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4)) / 4;

    document.getElementById("media").innerHTML = `<p style="font-weight: bold; font-size: 1.2rem;" id="resultado">A média do aluno é ${media.toFixed(2)}</p>`;
}