//variaveis e seletores 
let numero1="", numero_list=[], operacao="";
const tela = document.querySelector(".tela");
const botao = document.querySelectorAll("button");

for (var i=0; i < botao.length; i++) {
    //para cada botao existente executo um evento com uma rotina 
    botao[i].addEventListener("click", (e) => {
        // se o botao clicado for igual ao simbolo = então
        if (e.target.textContent === "="){
            //adicione o numero que foi digitado à lista
            numero_list.push(Number(numero1));

            //se a operação for de soma 
            if(operacao === "+") {
                //execute a função soma e mostre na tela
                tela.textContent = soma();
                //a variavel numero1 recebe o valor do resultado (sera usado pra constinuar o calculo, se o usuario desejar)
                numero1 = tela.textContent;
                //limpa a lista, pois esta operação foi finalizada
                numero_list = [];
                //bloqueia os botoes numericos para nao gerar o bug de concatenar numero no resultado 
                for(var i = 0; i < botao.length; i++) {
                    if(botao[i].textContent !== "+" && botao[i].textContent !== "-" && botao[i].textContent !== "="){botao[i].disabled = true;}   
                }

             //se a operação for de subtração   
            } else if (operacao === "-"){
                //execute a função sub e mostre na tela
                tela.textContent = sub();
                //a variavel numero1 recebe o valor do resultado (sera usado pra constinuar o calculo, se o usuario desejar)
                numero1 = tela.textContent;
                //limpa a lista, pois esta operação foi finalizada
                numero_list = [];
                //bloqueia os botoes numericos para nao gerar o bug de concatenar numero no resultado 
                for(var i = 0; i < botao.length; i++) {
                    if(botao[i].textContent !== "+" && botao[i].textContent !== "-" && botao[i].textContent !== "="){botao[i].disabled = true;} 
                }
            }  
        } else if (e.target.textContent === "+" || e.target.textContent === "-") {
            //reativando todos os botoes
            for(var i = 0; i < botao.length; i++) {
                botao[i].disabled = false;   
            }

            //exibindo o sinal de operação digitado na tela
            tela.textContent = e.target.textContent;

            //guardando o numero no array
            numero_list.push(Number(numero1));

            //limpando a variavel numero
            numero1="";

            //definindo qual operacao o usuario digitou
            if (tela.textContent==="+"){
                operacao = "+";
            } else if (tela.textContent ==="-"){
                operacao = "-";
            } else if (tela.textContent ==="*") {
                operacao = "*";
            } else if (tela.textContent ==="/") {
                operacao = "/";
            }
        } else  {
            //atviando todos os botoes
            for(var i = 0; i < botao.length; i++) {
                botao[i].disabled = false;   
            }

            //exibindo o numero digitado na tela
            tela.textContent += e.target.textContent;
            numero1 += e.target.textContent;
        }
    })   
}



function soma () {
    return numero_list[0] + numero_list[1];
}

function sub () {
    return numero_list[0] - numero_list[1];
}