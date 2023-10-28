"use strict"

/*EXEMPLO 01

SELECIONANDO ELEMENTOS*/
const exemplo01 = document.querySelector("#exemplo01");
const mensagem01 = document.querySelector("#mensagem01");
const pagina = document.querySelector("body");//OU document.body


/*DETECTANDO UM EVENTO DE CLIQUE */
exemplo01.addEventListener("click", function(){
    /*console.log("JRGZ$14");*/
    mensagem01.innerHTML = "JR$14";
    mensagem01.style.fontSize = "30px";
    pagina.style.fontFamily = "verdana";

    //REMOVENDO UM ELEMENTO
    //exemplo01.remove();

    //ESCONDER UM ELEMENTO
    exemplo01.style.display = "none";
});

const titulo = document.querySelector("h1");
/*se eu for monitorar outro evento usar o addEventListener("mouseover");*/titulo.addEventListener("mouseover",function(){

    //EXIBINDO O ELEMENTO
    exemplo01.style.display = "block";//block=traz o q ta escondido
    mensagem01.textContent = "Oi Sumido!!";
});



/*EXEMPLO 02*/
const mesangem02 = document.querySelector("#mensagem02");

const janela = document.querySelector("#janela-modal" );
const botaoFechar = document.querySelector("#janela-modal button" );

 //  document.addEventListener("mouseout", function(event){
    
    /*é nessesario verificar se a posição do mouse (no exio vertical) esta fora/acima da area do documento. se estiver, ai mostraremos/fazemos alguma ação */
 //     if(event.clientY  < 0){
        //alert("Quer sair PQFDP?")
        // mensagem02.innerHTML = "Quer sair mesmo?😡"
        // mensagem02.style.background = "purple";
        // mesangem02.style.color = "white";
        // mesangem02.style.fontSize = "50px";
 //       janela.showModal();
//    }
    
//});

document.addEventListener("mouseout", verificaSaida);

function verificaSaida(event){
    if(event.clientY < 0){
        janela.showModal();
        
        //DESATIVANDO O MONITOR DE EVENTO/FUNÇÃO
        document.removeEventListener("mouseout", verificaSaida);
    }
}

botaoFechar.addEventListener("click", function(){
    //console.log("botão fechar!");
    janela.close();
})



//EXEMPLO 03

const botaoNoturno = document.querySelector("#noturno");

botaoNoturno.addEventListener("click", function(){
   // alert("Modo Noturno");
   pagina.classList.toggle("modo-noturno");
   pagina.style.transition = "2s";

   /* se o modo estiver "ativado" */

   if( pagina.classList.contains("modo-noturno") ){
       //entao mudamos o texto do botao para desativar
       botaoNoturno.textContent= "Desativar";
    
   } else{ 
    //senao, mantemos o texto como ativar
    botaoNoturno.textContent = "Ativar"

   }
});