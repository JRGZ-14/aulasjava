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

//Exemplo 1: condicional SIMPLES (if)
let numero = 14;

if( numero >= 14){

    console.log("Mensagem Qualquer...")
    console.log(`foi exibido porque ${numero} é maior ou igual a 14 (condição especificada)`)

}

//Exenplo 2: condicional COMPOSTA (if e else)

//composta sera  a mais usada na programação

let aluno = "João Ricardo";
let nota1 = 9.14;
let nota2 = 8.21;
let nota3 = 7.65;
let media = (nota1 + nota2 + nota3) /3;
const mediaMinima = 7
//console.log(media);

console.log(`Aluno(a):${aluno}`);
console.log(`Notas: ${nota1},${nota2} e ${nota3}`);
console.log(`Média:${media}`);


if(media >= mediaMinima){
    console.log("Aprovado(a)!");
} else{
    console.log("Reprovado(a)!");
}