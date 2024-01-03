let continuar = true;

let totalNota = 0, totalAlunos = 0, totalHomens = 0, mulheresMaior7 = 0, homensMaiorNota = 0;
while(continuar) {
    nota = Number(prompt("Digite a nota"));
    genero = prompt("Digite o gênero da pessoa");
    totalNota += nota;
    if(genero === "m"){
        totalHomens++;
        if(nota > homensMaiorNota){
            homensMaiorNota = nota;
        }
    }
    if(genero === "f" && nota > 7){
        mulheresMaior7++;
    }
    totalAlunos++
    let resp = prompt("Continuar inserindo?")
    if(resp === "não"){
        continuar = false;
    }
};
let media = totalNota/totalAlunos;
console.log("Média das notas de " + totalAlunos + " alunos: " + media);
console.log(totalHomens + " notas de homens foram enviadas");
console.log(mulheresMaior7 + " notas de mulheres foram maiores do que 7");
console.log("A maior nota dos homens foi " + homensMaiorNota);
