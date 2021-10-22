function calcular(){

    const elementRetorno = document.getElementById('cubagem')

    const altura = document.getElementById("altura").value;
    const largura = document.getElementById("largura").value
    const comprimento = document.getElementById("comprimento").value

    const cubagem = ((altura / 100) * (largura / 100) * (comprimento / 100)) * 300;
    
    elementRetorno.innerText = parseFloat(cubagem).toFixed(2);

}