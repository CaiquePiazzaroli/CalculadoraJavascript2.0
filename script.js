//variaveis e seletores 
let numero1="", numero_list=[], operacao="";
const tela = document.querySelector(".resultado");
const botao = document.querySelectorAll("button");


for (var i=0; i < botao.length; i++) {
    //para cada botao existente executo um evento com uma rotina
    botao[i].addEventListener("click", (e) => {
        if (e.target.textContent === "="){
            numero_list.push(Number(numero1));
            if(operacao === "+") {
                tela.textContent = soma();
                numero1 = tela.textContent;
                numero_list = [];
                for(var i = 0; i < botao.length; i++) {
                    if(botao[i].textContent !== "+" && botao[i].textContent !== "-" && botao[i].textContent !== "=" && botao[i].textContent !== "*" && botao[i].textContent !== "/" && botao[i].textContent !== "c"){botao[i].disabled = true;}  
                }
            } else if (operacao === "-"){
                tela.textContent = sub();
                numero1 = tela.textContent;
                numero_list = [];
                for(var i = 0; i < botao.length; i++) {
                    if(botao[i].textContent !== "+" && botao[i].textContent !== "-" && botao[i].textContent !== "=" && botao[i].textContent !== "*" && botao[i].textContent !== "/" && botao[i].textContent !== "c"){botao[i].disabled = true;} 
                }
            } else if (operacao === "*") {
                tela.textContent = mult();
                numero1 = tela.textContent;
                numero_list = [];
                for(var i = 0; i < botao.length; i++) {
                    if(botao[i].textContent !== "+" && botao[i].textContent !== "-" && botao[i].textContent !== "=" && botao[i].textContent !== "*" && botao[i].textContent !== "/" && botao[i].textContent !== "c"){botao[i].disabled = true;} 
                }
            } else if (operacao === "/") {
                tela.textContent = div();
                numero1 = tela.textContent;
                numero_list = [];
                for(var i = 0; i < botao.length; i++) {
                    if(botao[i].textContent !== "+" && botao[i].textContent !== "-" && botao[i].textContent !== "=" && botao[i].textContent !== "*" && botao[i].textContent !== "/" && botao[i].textContent !== "c"){botao[i].disabled = true;} 
                }
            }

        } else if (e.target.textContent === "+" || e.target.textContent === "-" || e.target.textContent === "*" || e.target.textContent === "/") {
            for(var i = 0; i < botao.length; i++) {
                botao[i].disabled = false;   
            }
            tela.textContent = e.target.textContent;
            numero_list.push(Number(numero1));
            numero1="";
            if (tela.textContent==="+"){
                operacao = "+";
            } else if (tela.textContent ==="-"){
                operacao = "-";
            } else if (tela.textContent ==="*") {
                operacao = "*";
            } else if (tela.textContent ==="/") {
                operacao = "/";
            }

        } else if (e.target.textContent ==="c") {
                for(var i = 0; i < botao.length; i++) {
                    botao[i].disabled = false;   
                }
                numero1 = "";
                numero_list=[];
                operacao = "0";
                tela.textContent = "0";

        }else {
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

function mult () {
    return numero_list[0] * numero_list[1];
}

function div() {
    return numero_list[0] / numero_list[1];
}