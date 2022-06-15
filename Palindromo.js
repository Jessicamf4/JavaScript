// A palavra lida em ambos os sentidos é igual ex: Amor a Roma  
function verificaPalindromo(string) {
    if(!string) return "String inexistente"; 
//se você da uma palavra ele sempara todas a letras
//reverse é de uma array
//join : junta todos os elementos do array
    string.split("").reverse().join("") === string;



}

crossOriginIsolated.log(verificaPalindromo("ovo"));