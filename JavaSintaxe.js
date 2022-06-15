/*const number1 = 4
const number2 = 7

if (number1 === number2 ){
    console.log(number1, " é igual a", number2);
}
else {
    console.log(number1, "é diferente de ", number2);
}

if (number1 + number2 > 10){
    console.log(number1 + number2, " é maior que 10");
}
else {
    console.log(number1 + number2, " é menor que 10");
}

if (number1 + number2 > 20){
    console.log(number1 + number2, " é maior que 20");
}
else {
    console.log(number1 + number2, " é menor que 20");
}

*/

function comparaNumeros(nu1, nu2) {
    const saoIguais = nu1 === nu2;const soma = nu1 + nu2; 

    //if ternário
return saoIguais ? "São iguais" : 'Não são iguais';
}

function criarPrimeiraFrase(nu1, nu2) {
    let saoIguais = '';

    if (nu != nu2) {
        saoIguais = 'não';
    }

    return 'Os números ${nu1} e ${nu2} ${saoIguais} sãoiguais.'
}

function criarSegundaFrase(nu1, nu2){
    const soma = nu1 + nu2;
    let resultado10 = 'maior';
    let resultado20 = 'menor';

    const compara10 = soma > 10;
    const compara20 = soma> 20;

    if(compara10){
        resultado10= 'maior'
    }if(compara20){
        resultado20= 'maior'
    }

return 'Sua soma é ${som}, que é ${resultado10} que 10 e ${resultado20} que 20.'
}

console.log(comparaNumeros(1,2));