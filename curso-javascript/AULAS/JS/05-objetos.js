/* OBJETOS usar>> {}
ARRAYS usar>> [] */


// EXEMPL0 1 > SIMPLES
let livro = {
    titulo: "O Óbvio que Ignoramos",
    ano: 2016,
    volumes:1,
    autor: "Jacob Petry" 
};

// Meu livro preferido é:
console.log("Meu livro preferido é: "+livro.titulo);
console.log(`Meu livro preferido é: ${livro.titulo}`);

console.log(livro.autor+"  "+livro.ano);
console.log(livro.ano);


// EXEMPLO 2 > OBJETO CONTENDO ARRAY E OUTRO OBJETO
let cliente = {

    nome:"Frederico",
    apelido:"Kiko",
    idade:22,
    telefones:["11-4998-4341","11-9658-7924","14-998434160"],
    medidas:{peso:74, altura: 1.84}
};

console.log(cliente.nome);
console.log(cliente.idade + " anos");

// Acessando uma propriedade que tambem é array
console.log(cliente.telefones[2] );

// Acessando uma propriedade que tambem é um objeto
console.log(cliente.medidas.peso + "kg");
console.log(cliente.medidas.altura + " cm");


// aula 23/09/2023

// EXEMPLO 3: Array de Objetos
let livros = [

    {
        titulo: "Singular - O poder de ser diferente",
        autor: "Jacob Petry"
    },

    {
        titulo: "O Obstáculo é o Caminho",
        autor: " Ryan Holiday"
    },

    {
        titulo: "Roube Como Um Artista",
        autor: "Austin Kleon"
    }
];

// Singular (escrito por Jacob Petry) é o livro que estou lendo atualmente.

console.log(`${livros[0].titulo} (escrito por ${livros[0].autor}) é o livro que estou lendo atualmente. 🥽`);
