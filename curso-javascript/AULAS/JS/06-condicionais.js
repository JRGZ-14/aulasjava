// teste
// console.log("Condicionais");
// condicionais = verdadeira ou falsa

/* Estruturas de Controle Condicional 

Comandos mais comuns: 
-if (se)
-else (senão)
-else if (senão se)

Operadores Relacionais:
> maior que
< menor que 
>= maior ou igual
<= menor ou igual
== igualdade
!= diferente
*/

//EXEMPLO 1: condicional SIMPLES (if)
let numero = 14;

if( numero >= 14){

    console.log("Mensagem Qualquer...")
    console.log(`foi exibido porque ${numero} é maior ou igual a 14 (condição especificada)`)

}

//EXEMPLO 2: condicional COMPOSTA (if e else)

//composta sera  a mais usada na programação

let aluno = "João Ricardo";
let nota1 = 9;
let nota2 = 2.6;
//let nota3 = 9;
let media = (nota1 + nota2 ) /2;
let faltas = 0;


const mediaMinima = 7;
const limiteDeFaltas = 11;



console.log(`Aluno(a):${aluno}`);
console.log(`Notas: ${nota1},${nota2}`);
console.log(`Média:${media}`);

let resultado; 

/* if(media >= mediaMinima){
    resultado =("Aprovado(a)!");
} else{
    resultado =("Reprovado(a)!");
} */

console.log(`Faltas: ${faltas}`);

// &&= operador LOGICO && (E/AND)
if(media >= mediaMinima && faltas <= limiteDeFaltas){
    if(media >= mediaMinima)
        resultado =("Aprovado(a)!");
    } else{
        resultado =("Reprovado(a)!");
}

console.log(resultado);


//EXEMPLO 3: condicional ENCADEADA (if, else if, else)

/* Desempenhos

-Média menor que 3? PÉSSIMO
-Média menor que 5? RUIM
-Média menor que 7? REGULAR
-Média menor que 9? BOM
-Nenhuma das condições anteriores?EXCELENTE

P.E-Média menor que 10? EXCELENTE

 */
if(media < 3){
    console.log("PÉSSIMO 😱");
}
else if (media < 5) {
    console.log("RUIM 😶");
}
else if(media < 7) {
    console.log("REGULAR 😢");
}
else if(media < 9) {
    console.log("BOM 🤗");
}
else{
    console.log("EXCELENTE 🥳");
}

/* 
= IGUAL UNICO =
Serve para ATRIBUIR/COLOCAR VALOR

== IGUAL DUPLO ==
Serve para COMPARAR VALORES

=== IGUAL TRIPLO ===
Serve para COMPARAR VALORES E TIPOS DE DADOS*/
let a = "10";
let b = 10;
console.log(a === b);