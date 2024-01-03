let mediaValores = 0;
let maiorValor = 0;
let saldo = 1000;
let continuar;
let valor;
let operacao;
let qtdOperacoes = 0;

let nome = prompt("Digite o seu nome");
let cpf = Number(prompt("Digite o seu CPF"));
do{
    valor = Number(prompt("Digite o valor desejado"));
    if(valor > maiorValor){
        maiorValor = valor;
    }
    mediaValores += valor;
    qtdOperacoes++;
    operacao = prompt("Deseja depositar ou sacar o valor inserido? S ou D");
    switch(operacao){
        case "D":
            console.log(`${nome}, seu saldo atual é de R$${saldo}.`);
            saldo += valor;
            console.log(`Depósito feito! Seu saldo agora é de R$${saldo}.`);
            break;
        case "S":
            if(valor > saldo){
                console.log("O valor inserido é maior do que o saldo atual.");
                break;
            }else {
                console.log(`${nome}, seu saldo atual é de ${saldo}.`)
                saldo -= valor;
                console.log(`Saque feito! Seu saldo agora é de R$${saldo}.`);
                break;
            }
        default:
            console.log("Operação inválida");        
            break;
    }
    continuar = Number(prompt("Digite 1 para continuar e 2 para parar"));

}while(continuar === 1)

console.log("Saldo total: R$"+saldo);
console.log("Maior valor inserido: R$"+maiorValor);
console.log("Média dos valores inseridos: R$"+mediaValores/qtdOperacoes);