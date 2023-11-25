'use strict';

//selecionando o <select>
const lista = document.querySelector("#lista-de-musicas");

//selecionando o <audio>
const reprodutor = document.querySelector("audio");


const figureCapa = document.querySelector("figure");
const imagemCapa = figureCapa.querySelector("img");
const tituloMusica = figureCapa.querySelector("figcaption");





//monitorando o evento de mudanças de opcoes na lista <select>
lista.addEventListener("change", function(){



    //verificando se p figure esta escondido
    if(figureCapa.hasAttribute("hidden")){
        figureCapa.removeAttribute("hidden")
    }
    
    //selecionando o <option> que foi escolhido dentro da lista <select>
    let musicaSelecionada = lista.options[lista.selectedIndex];
    console.log(musicaSelecionada);
    
    //associando o value do option (musicaSelecionada) ap src do elemento audio(reprodutor)

    reprodutor.src= musicaSelecionada.value;

    //exibir o titulo da musica no figcaption
    tituloMusica.textContent = musicaSelecionada.textContent;


    //exibindo a capa no img
    //nesse caso e necessaro usar o getAttribute para poder acessar o atributo personalizado criado por você no HTML: data-imagem
    imagemCapa.src = musicaSelecionada.getAttribute("data-imagem");

    //reproduzindo a musica somente se o valor de musicaSelecionada diferente de vazio. usamos o operador !== (diferente)
    
    if(musicaSelecionada.value !== ""){
    reprodutor.play();   
    }

    
});