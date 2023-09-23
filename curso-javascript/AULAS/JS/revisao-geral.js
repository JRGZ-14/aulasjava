console.log("REVISÃO!!! dia 23/09/2023");

/* O que estudamos ate o momento?

-Sintaxe
-Variaveis, constantes e tipos de dados (texto,numeros) = Guardar Dados
-Formas de saida(concatenação e template literal/string)
-Janelas
-Array
-Objeto */

// se tiver duvida de qual usar, use a variavel

// Variavel
let clube = "Corinthians";

// constante (valor fixo)
const estado = "SP"


// saida de dados para testes
console.log(clube);
console.log(estado);

// O corinthians é do estado de SP
console.log("O "+clube+" é do estado de "+estado);

console.log(`O ${clube} é do estado de ${estado}`);


// janela de dialogo = prompt
/* let nome = prompt("Qual seu nome?");
console.log("Bem-Vindo(a) "+nome); */


// Arrays(listas de dados INDEXADOS)
// se tiver "array" se trata de um lista de dados
let comidas = ["pizza", "pastel", "paçoca"];

console.log(`adoro ${comidas[1]} e ${comidas[0]}!`);


// objeto (listas de dados NÃO INDEXADOS)
//  os dados são formados por propriedades com nome/valor

// não colocar "" se for numero exemplo> idade
 let aluno = {
    nome: "João Ricardo",
    sobrenome: "Gomes Zaplana",
    idade: 22
 };

console.log(`Sr.${aluno.nome} tem ${aluno.idade} anos.`);