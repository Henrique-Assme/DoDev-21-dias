let num1 = Number(prompt("Digite o primeiro número"));
let num2 = Number(prompt("Digite o segundo número"));
let op = prompt("Qual operação deseja realizar? (+, -, *, /)");

switch(op){
    case "+":
        console.log("Resultado da soma: " + (num1+num2))
        break;
    case "-":
        console.log("Resultado da subtração: " + (num1-num2))
        break
    case "*":
        console.log("Resultado da multiplicação: " + (num1*num2))
        break;
    case "/":
        if(num2 != 0){
            console.log("Resultado da divisão: " + (num1/num2))
            break;
        } else {
            console.log("Não é possível dividir por 0");
            break;
        }
    default:
        console.log("Operação inválida");
        break; 
}