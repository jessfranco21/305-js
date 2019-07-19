let idade = Number(prompt("Digite sua idade"));
let valorDoPagamento = Number(prompt("Digite o seu salário mensal"));
let valorDoEmpréstimo = Number(prompt("Digite o valor do empréstimo que voce quer adquirir"));
let limite = valorDoPagamento * 10;

if (idade >= 25 && idade <= 60){
    if (valorDoPagamento >= 2000){
        console.log("emprestimo aprovado")
    }
     else if(valorDoEmpréstimo > limite) {
        console.log("O valor solicitado não pode ser maior que 10x o salário")
    } 
    else {
        console.log ("salário recusado")
    } 
}
else {
    console.log("emprestimo recusado : idade inválida");

}