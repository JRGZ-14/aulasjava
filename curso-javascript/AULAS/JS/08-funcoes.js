'use strict'

console.log("funções!");

/* conceitos sobre FUNÇÕES
Funções são blocos de codigo responsaveis por executar determinadas tarefas.para usar estes blocos/funções e necessario invocar/chama-lo


Vantagens ao usar funções

-Reutilização de codigo
-Organização de codigo, permitindo a separação de diferentes logicas
-Performance melhor

Desvantagens (no JS)
-Existem varias fromas de fazer função
-Se a logica for confusa, a função tambem será*/




/* Exemplos */

/* Sintaxe 1 (Tradiional)
Função literal/anônima */
const exemplo1 = function(){
    console.log("Função literal/anônima");

};
exemplo1();// Chamada



/* Sintaxe 2(Tradicional)
Função nomeada/declarada */
function exemplo2(){
    console.log("Função nomeada/declarada");
}
exemplo2();// Chamada




/* Sintaxe 3(Moderna)
Função Flecha/seta (Arrow function ) */
const exemplo3 = () => {
    console.log("Flecha/seta (Arrow function)")

};
exemplo3();// Chamada


//Exemplos: Função com parametros
function soma(valor1, valor2){
    /* variavel LOCAL: só existe DENTRO da função */
    let total = valor1 + valor2;

    //retornamos para FORA da função o que foi calculado
    return total;

};
//chamamos a função
let resultado = soma(14, 25);
//console.log(total); //da errado, pois total não existe aqui

//jeito certo dela retornar
console.log(resultado);

let outroResultado = soma(140,90);
let outraCoisa = soma(4, 18);

console.log(outroResultado);
console.log(outraCoisa);


console.log("-----------------");

/*VERSÃ0 1 > versão que o professor thiago recomenda
function dobra(valor) {
    let valorDobrado = valor * 2;
    return valorDobrado;
}*/


/*VERSÃ0 2(arrow function)
const dobra = (valor) => {
    let valorDobrado = valor * 2;
    return valorDobrado;
};*/


/* VERSÃ0 3(arrow function) 
const dobra = valor => {
    return valor * 2;
}*/

/* VERSÃO 4(arrow function com retorno implicito) */
const dobra = valor => valor * 2;


let resultadoDobro = dobra(14);
console.log(resultadoDobro);