'use strict';

const lista = document.querySelector("#lista-de-musicas");
const reprodutor = document.querySelector("audio");

//monitorando o evento de mudanças de opcoes na lista <select>
lista.addEventListener("change", function(){
    
    //selecionando o <option> que foi escolhido dentro da lista <select>
    let musicaSelecionada = lista.options[lista.selectedIndex];
    console.log(musicaSelecionada);
    
    //associando o value do option (musicaSelecionada) ap src do elemento audio(reprodutor)

    reprodutor.src= musicaSelecionada.value;

    //reproduzindo a musica somente se o valor de musicaSelecionada diferente de vazio. usamos o operador !== (diferente)
    
    if(musicaSelecionada.value !== ""){
    reprodutor.play();   
    }

    
});