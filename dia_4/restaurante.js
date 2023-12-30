let temFome = prompt("Você está com fome?"); 
let temDinheiro = prompt("Você tem dinheiro?");
let restauranteAberto = prompt("O restaurante está aberto?");

if(temFome === "não" || temDinheiro === "não"){
    console.log("Hoje a janta será em casa");
}else if(temFome === "sim" && temDinheiro === "sim" && restauranteAberto === "não"){
    console.log("Peça um delivery");
}else{
    console.log("Hoje o jantar será no seu restaurante preferido!");
}