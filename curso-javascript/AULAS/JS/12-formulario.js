'use strict';

//selecionando o formulario e seus elementos 
const formulario = document.querySelector("form");
const campoNome = formulario.querySelector("#nome");
const campoNota1 = formulario.querySelector("#nota1");
const campoNota2 = formulario.querySelector("#nota2");
//selecionando a tabela e seus elementos
const tabela = document.querySelector("table");
const corpoTabela = tabela.querySelector("tbody");




formulario.addEventListener("submit", function(event){
    event.preventDefault();
//setAtribute = inserir
//romeveAtribute = remover
//hasAtribute = verificar

    // verificando se a tabela esta oculta, ou seja, se ele tem o atributo HIDDEN
    if(tabela.hasAttribute("hidden")){
    // se tem, entao removemos o atributo e com isso a tabela volta a aparecer
        tabela.removeAttribute("hidden");
    }

    //capturando os dados dgitados
    let nome = campoNome.value;
    //usamos PARSEFLOAT para garantir que e tratado como nu
    let nota1 = parseFloat(campoNota1.value);
    let nota2 = parseFloat(campoNota2.value);

    //calculando a media das notas
    let media = (nota1 + nota2) / 2;

    //verificando a situação do aluno de acordo com a media
    let situacao;       //undefined/indefinido
    let classe;           
    if(media >= 7){
        situacao = "Aprovado(a)😎";
        classe = "ap";
    }else{
        situacao = "Reprovado(a)😪";
        classe = "rep";
    }

    console.log(media, situacao, classe);
    //testes
    //console.log(nome, nota1, nota2, media, situacao);

    //roinas pra criar uma nova linha e colunas para exibição dos dados no corpo da tabela

    //1 -> criar elemento
    let linha = document.createElement("tr");
    linha.classList.add(classe);

    //2-> montar o conteudo do elemento
    linha.innerHTML = `<td>${nome}</td>
                       <td>${media}</td>
                       <td>${situacao}</td>`;

    //3-> adicionar a area da pagina desejada
    corpoTabela.appendChild(linha);

    //resetar formulario
    formulario.reset();

    //devolver foco/cursor para o nome
    campoNome.focus();

});