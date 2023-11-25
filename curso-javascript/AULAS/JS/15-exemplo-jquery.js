

//EXEMPLO 1 = manipulção do DOM 
//const titulo = document.querySelector("h1");
//const subtitulos = document.querySelector("h2, h3");
//querySelector ("#nome")
//querySelector (".nome")



//Jquery
//$() significa "função jQuery"
const titulo = $("h1");
const subtitulos = $("h2, h3");

console.log(titulo);
console.log(subtitulos);

//MODIFICANDO ELEMENTOS
titulo.text("Bem-Vindo ao jQuery!!😎")

//ACESSANDO DETERMINADOS ELEMENTOS SELECIONADOS
console.log( $(subtitulos).eq(0).text() );
console.log( $(subtitulos).eq(1).text() );

const sub1 = $(subtitulos).eq(0);
const sub2 = $(subtitulos).eq(1);


//APLICANDO O CSS INLINE
sub1.css("color","red");
sub2.css("text-transform","uppercase");

titulo.css({
    "color": "black",
    "text-align": "center",
    "font-family": "genava"
});

//APLICANDO CLASSE A UM ELEMENTO
const classicRock = $("h3");
classicRock.addClass("destaque");

/*------------*/

//EXEMPLO 2: DOM e Evento
const pagina = $("body");
const formulario = $("form");
const nome = $("#nome");
const tema = $("#tema");

//manipular evento
formulario.on("submit", function(event){
    event.preventDefault();
    console.log("JRGZ$14");

    //capturando os dados 
    let usuario = nome.val();
    let cor = tema.val();

    //obtendo o texto/nome da cor da opção selecionada
    let textoDaCor = tema.find("option:selected").text();

    //aplicando a cor na pagina
    pagina.css("background-color", cor);

    //personalizando o titulo
    titulo
    .hide()
    .html(`Olá <b>${usuario}</b>, você escolheu ${textoDaCor}`)
    //.fadeIn(3000)
    .slideDown(1000)
});