// let idade = Number(prompt("Digite sua idade"));
// let valorDoPagamento = Number(prompt("Digite o seu salário mensal"));
// let valorDoEmpréstimo = Number(prompt("Digite o valor do empréstimo que voce quer adquirir"));
// let limite = valorDoPagamento * 10;

// if (idade >= 25 && idade <= 60){
//     if (valorDoPagamento >= 2000){
//         console.log("emprestimo aprovado")
//     }
//      else if(valorDoEmpréstimo > limite) {
//         console.log("O valor solicitado não pode ser maior que 10x o salário")
//     } 
//     else {
//         console.log ("salário recusado")
//     } 
// }
// else {
//     console.log("emprestimo recusado : idade inválida");

// }






// let idade = Number(prompt("Digite sua idade"));
// let aposentado = (prompt("Você é aposentado? (sim/nao"));
// let estudante = prompt("Você é estudante? (sim/nao)");

// aposentado=aposentado.toLowerCase();
// estudante=estudante.toLowerCase();

// if(idade >=0 && idade <=12){
//     console.log("Entrada 10 reais");
// }
// else if(idade >=13 && idade <=17){
//     console.log("Entrada 15 reais")
// }

// else if(idade >=18 && idade <=59){
//     console.log("Entrada 35 reais");
// }

// else if(idade >=60 || aposentado ==="sim"){
//     console.log("Entrada gratuita");
// } 

// let dia = Number(prompt("digite um número de 1 aaa 7 e eu magicamente lhe responderei qual é o dia da semana"));

// if(dia == 1){
//     console.log("é domingo!!!!!!!!")
// }

// if (dia == 2) {
//     console.log("é segunda tadinho")
// }

// if (dia == 3) {
//     console.log("é terça")
// }

// if (dia == 4) {
//     console.log("é quarta")
// }

// if (dia == 5) {
//     console.log("é quinta ")
// }

// if (dia == 6) {
//     console.log("é sexta")
// }
// if (dia == 7) {
//     console.log("é sábado")
// }


let telefone = prompt("Digite seu numero de celular");

if (telefone.length == 9 && telefone[0] == 9){
    console.log("seu número está correto")
}
else{
    console.log("seu numero esta incorreto")
}


