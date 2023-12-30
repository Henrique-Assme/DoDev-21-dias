let nome = prompt("Qual seu nome?");
let idade = parseInt(prompt("Qual a sua idade?"));
let possuiCarteira = prompt("Possui carteira de motorista?");
let possuiCarro = prompt("Possui carro?");

if(idade <= 18 || possuiCarteira === "não"){
    console.log(nome+ ", você não pode dirigir");
}else if(idade >= 18 && possuiCarteira === "sim" && possuiCarro === "não"){
    console.log(nome+ ", você pode dirigir, mas não tem um carro");
}else{
    console.log(nome+ ", você será o motorista!");
}