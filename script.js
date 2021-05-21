/*Declaração das variáveis principais
visor: representa o elemento com o id "visor" | valorVisor e valorAtual: representam os valores que serão atualizados na tela
valor: armazena os caracteres adicionados a expressão | valores e numeros: armazenam os valores para a execução das operações
converter: transforma a string no número para a operação | indexValores: usado para percorrer a expressão 
resultado: armazena os resultados das operações */
var visor= document.getElementById("visor"), valorVisor= "", valorAtual= "";
var valor= "", valores= [], numeros= [], converter, indexValores= 0, resultado= 0;

function botaoLimpar()
{
    //Essa função limpa o visor e zera todo e qualquer valor presente nas variáveis
    valores= [];
    indexValores= 0;
    valorVisor= "";
    valorAtual= "";
    visor.innerHTML= "...";
}

function pedaco(valor)
{
    //Essa função executa a atualizacão de valores no visor e na expressão
    valorAtual= valorAtual+valor;
    valorVisor= valorVisor+valor;
    visor.innerHTML= valorVisor;
}

function botao0()
{
    //Adiciona o valor 0 a expressão e ao visor
    valor= "0";
    pedaco(valor);
}

function botao1()
{
    //Adiciona o valor 1 a expressão e ao visor
    valor= "1";
    pedaco(valor);
}

function botao2()
{
    //Adiciona o valor 2 a expressão e ao visor
    valor= "2";
    pedaco(valor);
}

function botao3()
{
    //Adiciona o valor 3 a expressão e ao visor
    valor= "3";
    pedaco(valor);
}

function botao4()
{
    //Adiciona o valor 4 a expressão e ao visor
    valor= "4";
    pedaco(valor);
}

function botao5()
{
    //Adiciona o valor 5 a expressão e ao visor
    valor= "5";
    pedaco(valor);
}

function botao6()
{
    //Adiciona o valor 6 a expressão e ao visor
    valor= "6";
    pedaco(valor);
}

function botao7()
{
    //Adiciona o valor 7 a expressão e ao visor
    valor= "7";
    pedaco(valor);
}

function botao8()
{
    //Adiciona o valor 8 a expressão e ao visor
    valor= "8";
    pedaco(valor);
}

function botao9()
{
    //Adiciona o valor 9 a expressão e ao visor
    valor= "9";
    pedaco(valor);
}

function botaoPontoFlutuante()
{
    //Adiciona uma vírgula a expressão e ao visor
    valor= ",";
    pedaco(valor);
}

function pedaco2(valor)
{
    //Essa função adiciona operadores a expressão e ao visor
    valores[indexValores]= valor;
    indexValores+= 1;
    valorVisor= valorVisor+valor;
    visor.innerHTML= valorVisor;
}

function botaoAdicao()
{
    //Adiciona o operador + a expressão e ao visor
    converter= parseFloat(valorAtual);
    valores[indexValores]= converter;
    valorAtual= "";
    indexValores+= 1;
    valor= "+";
    pedaco2(valor);
}

function botaoSubtracao()
{
    //Adiciona o operador - a expressão e ao visor
    converter= parseFloat(valorAtual);
    valores[indexValores]= converter;
    valorAtual= "";
    indexValores+= 1;
    valor= "-";
    pedaco2(valor);
}

function botaoMultiplicacao()
{
    //Adiciona o operador X a expressão e ao visor
    converter= parseFloat(valorAtual);
    valores[indexValores]= converter;
    valorAtual= "";
    indexValores+= 1;
    valor= "x";
    pedaco2(valor);
}

function botaoDivisao()
{
    //Adiciona o operador / a expressão e ao visor
    converter= parseFloat(valorAtual);
    valores[indexValores]= converter;
    valorAtual= "";
    indexValores+= 1;
    valor= "/";
    pedaco2(valor);
}

function percorrerValores(x)
{
    //Essa função percorre a expressão para realizar as operações
    var i1= 0, i2= 0;               //o valor de i1 e de i2 é 0
    while(i1<=indexValores){        //enquanto o valor de i1 for menor que o de indexValores...
        numeros[i2]= valores[i1]    //o valor do array numeros na posição de i2 recebe o valor de i1
        i1+=2                       //i1 recebe mais 2
        i2++                        //i2 recebe mais 1
    }

    var i=1;
    while(i<indexValores){          //enquanto o valor de i for menor que indexValores...
        if(valores[i] == "x"){
            var num1= numeros[i-1], num2= numeros[i];
            resultado= num1*num2;
        } else {
            if(valores[i] == "+") {
                var num1= numeros[i-1], num2= numeros[i];
                resultado= num1+num2;
            }
            if(valores[i] == "-"){
                var num1= numeros[i-1], num2= numeros[i];
                resultado= num1-num2;
            }
        }
        if(valores[i] == "/"){
            var num1= numeros[i-1], num2= numeros[i];
            resultado= num1/num2;
        } else {
            if(valores[i] == "+") {
                var num1= numeros[i-1], num2= numeros[i];
                resultado= num1+num2;
            }
            if(valores[i] == "-"){
                var num1= numeros[i-1], num2= numeros[i];
                resultado= num1-num2;
            }
        }
        i+= 2
    }
}

function botaoEnter()
{
    //Essa função começa a dar o resultado da expressão
    converter= parseFloat(valorAtual);
    valores[indexValores]= converter;
    for(var x= 1; x < indexValores; x++){
        percorrerValores();
    }
    visor.innerHTML= resultado
}