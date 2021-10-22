function calcular(){

    const elementRetorno = document.getElementById('cubagem')

    const altura = document.getElementById("altura").value
    const largura = document.getElementById("largura").value
    const comprimento = document.getElementById("comprimento").value

    
    if(altura.length == 0 || largura.length == 0 || comprimento.length == 0){
        document.getElementById('erro').style.display = 'block'
        return;
    }else{
        const cubagem = ((altura / 100) * (largura / 100) * (comprimento / 100)) * 300;
        elementRetorno.innerText = parseFloat(cubagem).toFixed(2)
        document.getElementById('erro').style.display = 'none'
        return;
    }

}