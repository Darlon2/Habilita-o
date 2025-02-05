
alert("Boas vindas ao nosso Site!");


let nome = prompt ("Digite seu nome: ");
let idade = prompt ("Digite sua idade: ");

//alert("Olá, " + nome + "! Você tem " + idade + " anos.");
let numeroDeVendas = 50
let saldoDisponivel = 1000
//let idade = 25
//let nome = "Lua"


if (nome == "" || idade == "") {
    let mensagemDeErro = document.createElement( )
    mensagemDeErro ("Erro! Preencha todos os campos") 
alert(mensagemDeErro);
}

if (idade >= 18) {
    alert("Ótimo " + nome + "! Você tem " + idade + " anos. já pode Tirar sua Habilitação.");
}

else {
    alert("Poxa, que pena  " + nome + "! Você não pode Tirar a Habilitação, você tem apenas " + idade + " anos. .");
}