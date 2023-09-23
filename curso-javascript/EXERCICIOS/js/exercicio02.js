// se e objeto usar = {}
// o q tiver dentro do objeto se chama = propriedade
// depois vem os valores



let pedido = {
    codigo: "123abc",
    data: "23/10/2023",
    produtos: ["video game", "Tv", "Pc"],
    preco: 4000.14,
    prazo: 4
};

console.log(`Código do Pedido:${pedido.codigo}`);
console.log(`Produto 1: ${pedido.produtos[0]}`);
console.log(`Produto 2: ${pedido.produtos[2]}`);
console.log(`Produto 3: ${pedido.produtos[1]}`);
console.log(`Preço do Pedido: ${pedido.preco}`);


// DESAFIOO---01!!
// toLocaleString = deixar formatado em reais

let precoFormatado = pedido.preco.toLocaleString(
    "pt-br",{
        style:"currency",
        currency:"BRL"
    }
);

console.log(precoFormatado);

