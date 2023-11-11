"use strict";

const b1 = document.querySelector("#b1");
const b2 = document.querySelector("#b2");
const b3 = document.querySelector("#b3");
const pagina = document.querySelector("body");
const subtitulo = document.querySelector("h2");
const titulos = document.querySelectorAll("#centro1, #centro2");
const quadrado1 = document.querySelector(".q1");
const quadrado2 = document.querySelector(".q2");
const quadrado3 = document.querySelector(".q3");

b1.addEventListener("click", function(){
    pagina.style.backgroundColor = "cornflowerblue";
    pagina.style.transition = "2s";
    subtitulo.innerHTML = "Azul significa Harmonia e Maturidade";
    subtitulo.style.color = "#c4d9ff";
});

b2.addEventListener("click", function(){
    pagina.style.backgroundColor = "green";
    pagina.style.transition = "2s";
    subtitulo.innerHTML = "Verde significa Saúde e Esperança";
    subtitulo.style.color = "#65ee65";

});

b3.addEventListener("click", function(){
    pagina.style.backgroundColor = "darkorange";
    pagina.style.transition = "2s";
    subtitulo.innerHTML = "Laranja significa Força e Energia";
    subtitulo.style.color = "#ffd7a5";
});

quadrado1.addEventListener("click", function () {
    pagina.style.backgroundColor = "cornflowerblue";
    pagina.style.transition = "2s";
    subtitulo.innerHTML = "Azul significa Harmonia e Maturidade";
    subtitulo.style.color = "#c4d9ff";
    (titulos[0]).style.textAlign = "center";
    (titulos[1]).style.textAlign = "center";
});

quadrado2.addEventListener("click", function () {
    pagina.style.backgroundColor = "green";
    pagina.style.transition = "2s";
    subtitulo.innerHTML = "Verde significa Saúde e Esperança";
    subtitulo.style.color = "#65ee65";
    (titulos[0]).style.textAlign = "center";
    (titulos[1]).style.textAlign = "center";
});

quadrado3.addEventListener("click", function () {
    pagina.style.backgroundColor = "darkorange";
    pagina.style.transition = "2s";
    subtitulo.innerHTML = "Laranja significa Força e Energia";
    subtitulo.style.color = "#ffd7a5";
    (titulos[0]).style.textAlign = "center";
    (titulos[1]).style.textAlign = "center";
});