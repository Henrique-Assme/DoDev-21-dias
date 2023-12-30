let nome = prompt("Digite seu nome");
let idade = parseInt(prompt("Digite sua idade"));
let altura = parseFloat(prompt("Digite sua altura"));
let peso = parseFloat(prompt("Digite seu peso"));

let anoDeNascimento = 2023 - idade;
let imc = peso / (altura * altura);

console.log("Olá, " + nome + 
", você tem " + idade + 
" anos, nasceu em " + anoDeNascimento + 
", tem " + altura + 
"m de altura, pesa " + peso + 
"kg e seu IMC é " + imc +
"kg/m2.");