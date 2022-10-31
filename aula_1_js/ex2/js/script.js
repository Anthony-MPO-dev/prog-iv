
//Crie um array contendo três valores. Crie um segundo array
// de três posições e adicione em cada posição o primeiro
// array criado. Mostre no console, para cada array interno, 
//a posição correspondente do array externo.

var valores = [5, 3, 1];
var array = [valores, valores, valores];


for (var i = 0; i < 3; i++) {
    console.log("array externo posição: "+i);
    for (var j = 0; j < 3; j++) {
        console.log(array[i][j]);
    }
}







