let continuar;
let nome, idade, peso, altura, profissao;
let imc, faixaIMC;
let anoDeNascimento;
do{
    nome = prompt("Qual o seu nome?");
    idade = parseInt(prompt("Qual a sua idade?"));
    peso = Number(prompt("Qual o seu peso? (kg)").replace(",", "."));
    
    altura = Number(prompt("Qual a sua altura? (metros)").replace(",", "."));
    profissao = prompt("Qual a sua profissão?");
    
    console.log(`Olá ${nome}, você tem ${idade} anos, 
    é ${profissao}, tem ${altura}m e pesa ${peso}kg.`);
    
    //verificação de idade
    if(idade >= 18){
        console.log("Está liberado para tomar umas geladas!");
    }else {
        console.log("Sem gelada para você.");
    }
    
    //idade do usuário em meses, semanas e dias
    console.log(`Idade: ${idade}\nEm meses: ${idade*12}`+ 
    `\nEm semanas: ${idade*52}\nEm dias: ${idade*365}`);
    
    //IMC
    imc = peso/(altura*altura);
    if(imc > 30){
        faixaIMC = "Obesidade";
    }else if(24.9 <= imc && imc < 30){
        faixaIMC = "Sobrepeso";
    }else if(18.5 <= imc && imc < 24.9){
        faixaIMC = "Normal";
    }else{
        faixaIMC = "Magreza";
    }
    console.log(`Seu IMC é ${imc}kg/m^2 e a classificação indicada é ${faixaIMC}.`);
    
    //ano que nasceu
    anoDeNascimento = 2023-idade;
    console.log(`Você nasceu em ${anoDeNascimento}`);
    for(let i = anoDeNascimento; i <2024; i++){
        console.log(`${i} - ${i-anoDeNascimento} anos de idade`);
    };

    continuar = prompt("Deseja continuar inserindo novos dados?\n1 - continuar\n0 - parar");
}while(continuar === '1')