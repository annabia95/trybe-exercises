let salarioBruto = 3000;
let salarioBase;
let salarioLiquido; 
if (salarioBruto <= 1556.94) {
    salarioBase = salarioBruto - 0.08*salarioBruto;
}
else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92){
    salarioBase = salarioBruto - 0.09*salarioBruto;
}
else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82){
    salarioBase = salarioBruto - 0.11*salarioBruto;
}
else {
    salarioBase = salarioBruto - 570.88;
}
if (salarioBase <= 1903.98) {
    salarioLiquido = salarioBruto;
}
else if (salarioBase > 1903.98 && salarioBase <= 2826.95){
    salarioLiquido = salarioBase - (salarioBase*0.075 - 142.80);
}
else if (salarioBase > 2826.95 && salarioBase <= 3751.05){
    salarioLiquido = salarioBase - (salarioBase*0.15 - 354.80);
}
else if (salarioBase > 3751.05 && salarioBase <= 4664.68){
    salarioLiquido = salarioBase - (salarioBase*0.225 - 636.13);
}
else {
    salarioLiquido= salarioBase - (salarioBase*0.275 - 869.36);
}
console.log ("O valor do salário liquido é de " + salarioLiquido + "reais");