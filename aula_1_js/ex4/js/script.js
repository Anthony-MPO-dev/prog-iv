//Crie uma função countdown que receba como parâmetro um 
//inteiro n e mostre no browser (via alert) a contagem 
//regressiva de n até 0.

contdown(7);

function contdown(n){
    if(n){
        while(n>0){
            alert(n)
            n--;
        }
    }else{
        alert("O valor escolhido não é um numero")
    }
}











