let correto;
let nome, idade, salario;
do{
    nome = prompt("Qual o seu nome?");
    idade = parseInt(prompt("Qual a sua idade?"));
    salario = Number(prompt("Qual o seu salário").replace(",","."));
    console.log(`Olá ${nome}, você tem ${idade} anos e seu salário atual é de R$${salario}.`);
    correto = prompt("Essas informações estão corretas? (s/n)");
}while(correto === 'n')

//previsão de salário
console.log("Previsão de salário até o ano de 2033:");
let taxa = 0.015;
let proximoSalario = salario*(1+taxa);
for(i = 0; i < 10; i++){
    console.log(`${2024+i} - R$${proximoSalario.toFixed(2)}`);
    taxa *= 2;
    proximoSalario *= (1+taxa);
}