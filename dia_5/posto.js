let op = Number(prompt("Escolha um serviço:" + 
"\n1 - abastecer com gasolina" +
"\n2 - abastecer com álcool" +
"\n3 - calibrar os pneus"));
let litros;

switch(op){
    case 1:
        litros = prompt("Informe quantos litros deseja abastecer:");
        console.log(litros + "L de gasolina por R$" + litros*5);
        break;
    case 2:
        litros = prompt("Informe quantos litros deseja abastecer:");
        console.log(litros + "L de álcool por R$" + litros*3);
        break;
    case 3: 
        console.log("pneus calibrados com sucesso");
        break;
    default:
        console.log("Opção inválida");
        break;
}