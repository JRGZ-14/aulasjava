// se tem "[]" = > arrays


/* o acesso aos dados individuais do array, é feito através do nome do array e do ÍNDICE corresponte á posição do dado */ 
// OBS > contagem sempre inica com ZERO.


let alunos = ["João", "Ricardo", "Gomes", "Zaplana"];

console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
console.log(alunos[3]);

/* mini-exercicio
-Crie um array com o nome de 5 artistas/bandas que você gosta
-Em seguida mostre uma mensagem no console indicando o nome do artista que você mais gosta e do que menos gosta */


let artista = ["Peso Peso ","Thxuzz","Duzz","M24","Ryu the Runner", "NLE Choppa","MC Igu","Ret"]

let mais =("+");
let menos =("-");

// Template literal/string
console.log(`U Artista que ${mais} estou ouvindo no momento é: ${artista[0]}🎯`);
console.log(`U Artista que ${menos} estou ouvindo no momento é: ${artista[5]} 💤`);

// Concatenação
console.log("O Artista que "+mais+" estou ouvindo no momento é: " +artista[7]+" 🎯");
console.log("O Artista que "+menos+ " estou ouvindo no momento é: " +artista[2]+" 💤");


// MATRIZES (arrays com 2 ou mais dimensões)
let linguagens = [
    ["HTML","CSS","JS"],                          
    ["PHP","ASP.Net","Java","Python"]
];

// CSS é para estilos.
// PHP é para Back-End.
console.log(`${linguagens[0][1]} é para estilos ✨`);
console.log((linguagens[1][0])+" é para Back-End 📚");
