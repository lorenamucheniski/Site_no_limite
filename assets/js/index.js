const lestras = document.querySelector('.nomes');
let arrayDeNomes = ["Pedro Henrique", "Lorena Mucheniski"];
        
function mostrasDadosNaTela(nomes) {
    lestras.innerHTML = "Feito por: " + nomes[0] + " e " + nomes[1] + " ©";
}
    
mostrasDadosNaTela(arrayDeNomes);
