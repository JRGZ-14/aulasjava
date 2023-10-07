/*habilitando o modo estritodo JS */
'use strict';


/* PRINCIPAIS COMANDOS DE REPETIÇÃO 

-while      = ENQUANTO
-do/while   = FAÇA/ENQUANTO
-for        = PARA


OBS: normalmente os comandos são controlados por meio de uma variável contadora.*/

/*Nomes comuns para esta variavel = i, j, k = variaveis de controle*/

// EXEMPLO 1: LOOP WHILE

/* let i = 1;
   while ( i <= 5){
    console.log(`Contador vale: ${i}`);
    i++;

}
 */


//EXEMPLO 2: LOOP DO

//*este loop sempre funcionara pelo menos 1x
/* let i = 10;
do {
    alert("jr$14");
    i++;//i = incremento
}
while (i <= 3);
  */


 
 //EXEMPLO 3: LOOP FOR

 /* for(inicialização; condição; atualização do loop ) */

/* for( let i = 1; i <= 50; i++ ){
    console.log(`I vale ${i}`);
}
 */

//EXEMPLO 4: LOOP com ARRAY
/* let clientes = [
  "JRGZ","14","JR","JR$14","Jota","Jrgz14"
]; */

/* console.log("cliente: "+clientes[0]);
console.log("cliente: "+clientes[1]);
console.log("cliente: "+clientes[2]);
console.log("cliente: "+clientes[3]);
 */

/* 
for(let i = 0; i < 6; i++ ){
  console.log(`Cliente: ${clientes[i]}`);
} */

//cache da quantidade de clientes (guardando o tamando do array)
/* let quantidadeClientes = clientes.length;

for(let i = 0; i < quantidadeClientes; i++ ){
  console.log(`Cliente: ${clientes[i]}`);
} */





//LOOPS *modernos e *exclusivos do JS para ARRAYS e Objetos

//LOOP FOR/OF: útil para Arrays
/* let bandas = ["Savatage","Slayer","Nightwins"];
for (let banda of bandas){
  console.log(`Banda: ${banda}`)
} */


//LOOP FOR/IN: útil para Obejtos
/* let pessoa = {
  nome: "João Ricardo",
  idade: 22,
  cidade: "São Paulo"
}
 */
/* for(let dados in pessoa){
  //console.log(dados);
  console.log(pessoa[dados]);
} */

/* let pessoas = [
  {
    nome: "JR$14",
    idade: 22
  },
  {
    nome:"Peso Peso",
    idade: 28
  },
  {    
    nome:"Trippie Red",
    idade: 24
  }
];
for(let pessoa of pessoas){
  console.log(pessoa.nome);
  console.log(pessoa.idade);

} */



/* mini exercicio
1) Crie um ARRAY contendo o nome dos 12 mesess do ano
2) Utilize um loop (qualquer um) para exibir os nomes de cda um no console


-DESAFIO: faça aparecer também junto com o nome o número do mês. 
Exemplo :
1 - janeiro
2 - Fevereiro etc.*/

const meses = [
  {nome: "Janeiro",numero: 1},
  {nome: "Fevereiro",numero: 2},
  {nome: "Março",numero: 3},
  {nome: "Abril",numero: 4},
  {nome: "Maio",numero: 5},
  {nome: "Junho",numero: 6},
  {nome: "Julho",numero: 7},
  {nome: "Agosto",numero: 8},
  {nome: "Setembro",numero: 9},
  {nome: "Outubro",numero: 10},
  {nome: "Novembro",numero: 11},
  {nome: "Dezembro",numero: 12}
];

for( let mes of meses){
  console.log(`${mes.numero} ¨ ${mes.nome}`);
}



