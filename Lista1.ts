//1.1
// function soma(var1: number, var2: number, var3:number):number{
//   return var1 + var2 + var3;
// }

// console.log(soma(1,2,3));

//1.2
// function divisao(x:number, y:number): number{
//   return x/y;
// }
// console.log (divisao(6,2));

//1.3
// function maiorIdade (ano: number):number {
//   if ((2024 - ano) < 18){
//     return "Menor de Idade";
//   }
//   else {
//     return "Maior de Idade";
//   }
// }

// console.log(maiorIdade(2018));

//1.4
// function mediaAluno(notas: number[]): string{
//   let media = 0;
//   let soma = 0;
//   let contador = 0;

//   for (let i = 0; i < notas.length; i++) {
//     contador++;
//     soma += notas[i];
//   }
//   media = soma / contador;
//   if (media >= 5) {
//     return "Aprovado";
//   }
//   else{
//     return "Reprovado";
//   }
// }

// console.log(mediaAluno([4, 8, 7, 3]));

// 2.1

// function algumacoisa (x: number, y: number): any{
//   if (y === 0){
//     return "Não é possível!!"
//   }
//   else {
//     return "Resultado: " + x/y;
//   }
// }

// console.log(algumacoisa(10, 2));

//2.2
// import promptSync from 'prompt-sync';

// const prompt = promptSync();

// function numeradorDiv(x: number, y: number): any {
//   if (y === 0) {
//     while (y === 0) {
//       const n1 = prompt("Insira um numerador válido: " );
//       if(parseInt(n1) !== 0){
//         return x/parseInt(n1);
//       }
//     }
//   } else {
//     return x / y;
//   }
// }

// console.log(numeradorDiv(8, 0));


//2.3
// function aumento (salario: number): any{
//   let reajuste = 0;
//   if (salario <= 2500){
//     reajuste = salario + (salario*0.2);
//     return "Novo salário: " + reajuste;
//   }
//   else {
//     reajuste = salario + (salario*0.1);
//     return "Novo salário: " + reajuste;
//   }
// }

// console.log(aumento(2800));

//2.4

// function reproAluno (notas: number[]): any {
//   let soma = 0;
//   let media = 0;
//   let contador =0;
//   for (let i = 0; i < notas.length; i++){
//     soma += notas[i];
//     contador++;
//   }
//   console.log(media = soma / contador);
//   if (media >= 7){
//     return "Aprovado!!"
//   }
//   else if(media < 7 && media >= 4){
//     return "Exame!!"
//   }
//   else{
//     return "Reprovado!!"
//   }
// }

// console.log(reproAluno([9, 7, 8, 7]));