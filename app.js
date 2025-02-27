
alert("Boas vindas ao nosso Site!");

//let nome = 'Lua' 
//let idade = 25
nomeUsuario = prompt ("Digite seu nome: ");
suaIdade = prompt ("Digite sua idade: ");

if (suaIdade === null || suaIdade.trim() === "" || isNaN(suaIdade)) {
    alert("Erro: Por favor, digite um número válido.");
} else {
    const suaIdadedadeNum = Number(suaIdade);
    
    if (suaIdadedadeNum >= 18) {
        alert("Ótimo " + nomeUsuario + "! Você tem " + suaIdade + " anos. já pode Tirar sua Habilitação.");
    } else {
        alert("Poxa, que pena  " + nomeUsuario + "! Você não pode Tirar a Habilitação, você tem apenas " + suaIdade + " anos. .");
    }
}






let numeroDeVendas = 50
let saldoDisponivel = 1000