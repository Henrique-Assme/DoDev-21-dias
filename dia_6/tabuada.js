let tabuada = Number(prompt("Informe a tabuada desejada"));

for(let j = tabuada; j <= tabuada+2; j++){
    for(let i = 0; i<=10; i++){
        if(i === 0){
            console.log("Tabuada do " + j)
        }else {
            console.log(j + " X " + i + " = " + j*i);
        }
    }
}
