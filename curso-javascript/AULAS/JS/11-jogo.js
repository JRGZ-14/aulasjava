'use strict';

const pagina = document.querySelector("body");
const formulario = document.querySelector("form");
const campoPalpite = document.querySelector("#palpite");
const resultado = document.querySelector("#resultado");
const imagem = document.querySelector("#imagem");

//crie uma constante para o elemento de imagem

//variaveis para os arquivos de imagem
let faustao = "faustao.gif";
let miseravi = "miseravi.gif";


/*Gerar VALORES ALEATORIOS 
usamos oMath.randon() * 15 para gerar valores entre 0 e 14, e passamos o valor para o pareInst para descartar a parte "quebrada" do numero, mantendo apenas o valor inteiro*/
let numeroAleatorio = parseInt(Math.random() * 15);
console.log(numeroAleatorio);

/*Detectando o acionamento do formulario para capturar e analisar o palpite*/
formulario.addEventListener("submit", function(event){
    //anula o comportamento padrão do evento
    event.preventDefault();
    
    //Capturando o palpite(valor do campo)
    let palpite = parseInt(campoPalpite.value);
    console.log(palpite);

    //Comparar o palpite com o numero aleatorio do computador
    if(palpite === numeroAleatorio){
        resultado.textContent = "🤑";
        resultado.style.color = "green";
        pagina.style.background = "green";
        imagem.src = miseravi;

        resultado.style.animation = "tada 3s infinite"
        // location = redirecionamento
        //location = "http://www.sp.senac.br"

    }else{
        resultado.textContent = "😡";
        resultado.style.color = "red";
        pagina.style.background = "red";
        imagem.src = faustao;

        resultado.style.animation = "shakeX 3s infinite"
        //console.log("ERRROOUUU!!");
        //location = "http://www.sp.senac.br"

        //solução 1
        //imagem.setAttribute("src",miseravi);

        //solução 2 foi a q usei
        //imagem.src = miseravi;

    
    }
});