//Crie um array contendo os valores Pedra, Papel e Tesoura. 
//Peça ao usuário via prompt para informar o item escolhido.
// Mostre via console o resultado do jogo. Exemplo: Papel 
//venceu Pedra.

var P_P_T = ["Pedra", "Papel", "Tesoura"];

var escolha = prompt("Digite (Pedra), (Papel) ou (Tesoura)");

if (escolha == P_P_T[0]){
    console.log("Pedra venceu Tesoura");
} else if(escolha == P_P_T[1]){
    console.log("Papel venceu Pedra");
}else if(escolha == P_P_T[2]){
    console.log("Tesoura venceu Papel");
}







