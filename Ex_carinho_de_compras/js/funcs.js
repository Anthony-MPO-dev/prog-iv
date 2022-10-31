
function Produto(Nome, Preco){    
    return {
        nome: Nome,
        preco: Preco,
        contador: 0,
        new: function () {
            this.contador++;
        }
    }
}

var contador_produtos = 0;

var creatina = new Produto("Creatina Monohidratada", 99.99);
var multivitaminico = new Produto("Multivitaminico", 36.99);
var whey = new Produto("Whey Protein", 112.99);
var pre = new Produto("Pré-Treino", 26.99);


function posicionaProduto(produto, text){
    contador_produtos++;
    document.getElementById("carrinho").innerHTML +='<li id="'+text+'_p">  <p> '+ produto.nome +' </p> <p> Preço: $'+ produto.preco +'x1  </p> <a href=""> Excluir</a> </li>';
}
function posicionaProduto1(produto, text){
    contador_produtos++;
    document.getElementById("carrinho").innerHTML ='<li id="'+text+'_p">  <p> '+ produto.nome +' </p> <p> Preço: $'+ produto.preco +'x1 </p> <a href=""> Excluir</a> </li>';
}

function posicionaProduto2(produto, text){
    contador_produtos++;
    document.getElementById(text+'_p').innerHTML =' <p> '+ produto.nome +' </p> <p> Preço: $'+ produto.preco + 'x'+produto.contador+' </p> <a href=""> Excluir</a>';
}



function verificaExiste(text){
    if(text){
        return 1;
    }else{
        return null;
    }
    
}

function AddProducts() {

    var elements = document.getElementById("produtos"); // pega o elemento dentro do select

    var value = elements.value;
    if (value === "none") { // se o nome for nulo

        alert("Produto Invalido");

    }
    else{// se nome existe 

        var text = elements.options[elements.selectedIndex].value;// pega o nome do produto que eu quero adicionar
        var v = document.getElementById('car-content');
        if(!v){//se li elemento ja existe
            v = document.getElementById(text+'_p');
            if (v){
                switch (text) {//se nome for
                    case 'Creatina':
                        //adiciona mais um produto ao valor total
                        creatina.new();
                        posicionaProduto2(creatina, text);
                        break;
                    case 'Multivitaminico':
                        multivitaminico.new();
                        posicionaProduto2(multivitaminico, text);
                        break;
                    case 'Whey':
                        whey.new();
                        posicionaProduto2(whey, text);
                        break;
                    case 'Pre':
                        pre.new();
                        posicionaProduto2(pre, text);
                        break;
                    default:
                        alert(`Sorry, we are out of ${text}.`);
                }  
            } 
            else{
                console.log("meu");
                switch (text) {//se nome for
                    case 'Creatina':
                        creatina.new();
                        posicionaProduto(creatina, text);
                        break;
                    case 'Multivitaminico':
                        multivitaminico.new();
                        posicionaProduto(multivitaminico, text);
                        break;
                    case 'Whey':
                        whey.new();
                        posicionaProduto(whey, text);
                        break;
                    case 'Pre':
                        pre.new();
                        posicionaProduto(pre, text);
                        break;
                    default:
                        alert(`Sorry, we are out of ${text}.`);
                } 
            }
        }
        else{//produto ainda não existe
            switch (text) {//se nome for
                case 'Creatina':
                    creatina.new();
                    posicionaProduto1(creatina, text);
                    break;
                case 'Multivitaminico':
                    multivitaminico.new();
                    posicionaProduto1(multivitaminico, text);
                    break;
                case 'Whey':
                    whey.new();
                    posicionaProduto1(whey, text);
                    break;
                case 'Pre':
                    pre.new();
                    posicionaProduto1(pre, text);
                    break;
                default:
                    alert(`Sorry, we are out of ${text}.`);
            }   
            
        }
        document.getElementById('num_produtos').innerHTML = contador_produtos+" produto(s)";
        var total = (creatina.preco*creatina.contador)+(whey.preco*whey.contador)+(pre.preco*pre.contador)+(multivitaminico.preco*multivitaminico.contador)
        document.getElementById('total_price').innerHTML = "Total: $"+total+" ";
    }
}

function troca_button() {   
    if (document.getElementById('button-dropdown-down')){
        document.getElementById('verify').innerHTML = '<div id="button-dropdown-up" onclick="troca_button()"> <img src="images/seta-para-cima.png"  class="button-dropdown"></img> </div>';
        document.getElementById('cart-content').style.display = "none";
        
    }else if(document.getElementById('button-dropdown-up')){
        document.getElementById('verify').innerHTML = '<div id="button-dropdown-down" onclick="troca_button()"> <img src="images/seta-para-baixo.png"  class="button-dropdown"></img> </div>';
        document.getElementById('cart-content').style.display = "flex";
    }
}
