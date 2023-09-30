

let funcionario = "Joao Ricardo";
let salario = 1800;
let novoSalario 

if(salario > 1500){
    novoSalario = salario*1.15;
}else if(salario<= 3000){
    novoSalario = salario*1.10;
}else {
    novoSalario = salario*1.05;
}


console.log(`o funcionario ${funcionario} , teve o salario aumentado em : ${novoSalario}`);



//resolvido pelo professor

let salarios = 1800;
let newSalario;

if(salario > 1500){
    newSalario = salarios * 1.15;
} else if(salarios <= 3000){
    newSalario = salarios * 1.10;
} else {
    newSalario = salarios * 1.05;
}

console.log(salarios);
console.log(newSalario.toFixed(2));// fixar em 2 casas decimais

//tratar/formatar como moedas em reais 
console.log(newSalario.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    })
);