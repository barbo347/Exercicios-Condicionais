//1
// function subtracao(var1: number, var2: number):number{
//   return var1 - var2;
// }

// console.log(subtracao(4,2));

//2
// function multiplicacao(var1: number, var2: number, var3:number):number{
//   return var1 * var2 * var3;
// }

// console.log(multiplicacao(1,2,3));

//3
// function soma(var1: number, var2: number, var3: number, var4: number):number{
//   return var1 + var2 + var3 + var4;
// }

// console.log(soma(4,2,4,3));

//4
// function notas(var1: number, var2: number, var3: number):number{
//   return (var1 + var2 + var3)/3;
// }

// console.log(notas(4,2,4));

//5
// function convertePeso (peso: number): number {
//   return peso*1000;
// }

// console.log(convertePeso(53));

//6
// import promptSync from 'prompt-sync';

// const prompt = promptSync();

// function pagamento (preço: number): any {
//   let diferença = 0;
//   let valorF = 0;
  
//   console.log('[1] - À vista');
//   console.log('[2] - 2x Parcelas s/ juros');
//   console.log('[3] - 4x Parcelas c/ juros');
//   const escolha = prompt("Escolha a forma de pagamento: ");
//   let forma = parseInt(escolha);
  
//   if (forma === 1){
//     diferença = preço * 0.1;
//     valorF = preço - diferença;
//     return "Valor final: " + valorF;
//   }
//   else if (forma === 2){
//     return "Valor final: " + preço;
//   }
//   else if (forma === 3){
//     diferença = preço*0.05;
//     valorF = preço + diferença;
//     return "Valor final: " + valorF;
//   }
// }

// console.log(pagamento(100));

//7

// function salarioAumenta(salario: number): number{
//   let aumento:number = salario * 0.25;
//   let valorF: number = salario + aumento;
//   return valorF;
// }

// console.log(salarioAumenta(2000));

//8
// function aumentaSalario(salario: number, aumento: number): any{
//   let diferenca:number = salario * aumento/100;
//   let valorF: number = salario + diferenca;
//   return "Aumento: " + diferenca + " Valor final: "+ valorF;
// }


// console.log(aumentaSalario(1600, 10));

//9
// function salarioBase(salario: number){
//   let bonus: number = salario*0.05; 
//   let imposto: number = salario*0.07;//126
//   let salarioFinal: number =salario + bonus - imposto;
//   return salarioFinal;
// }

// console.log(salarioBase(1800));

//10 - Nota: Houve uma falha na elaboração do enunciado, um ano com 12 meses e 30 dias cada não pode ter 365 dias.

// function nascimento (dia: number, mes: number, ano: number, nome: string){
//   let DifDif: number = 0;
//   let anoDif = (2024 - ano) * 360; //8760
  
//   let mesDif = Math.abs(mes - 4) * 30; //180
  
//   let diaDif = Math.abs(dia - 16); //4
//   //8576 - 365 dias por ano
//   //8579 - considerando flutuações de meses e anos
//   //8456 - 360 dias por ano
  
//   if (mesDif !== 0){
//     DifDif =  (anoDif - mesDif)*30;
//     if (diaDif !== 0){
//      return DifDif - diaDif;
//     }
//     else {
//       return DifDif;
//     }
//   }
//   else if (mesDif === 0 && diaDif === 0){
//     return (anoDif * 30);
//   }
//}
// console.log(nascimento(20, 10, 2000, 'Rosilvado'));

//11

// function HelloFulano (sobrenome: string, nome: string){
//   return "Sr(a) " + nome + " "+ sobrenome + ", é uma honra contar com a sua presença!";
// }

// console.log(HelloFulano('Bahbora', 'Celí'));

//12
// function hipotenusa (x:number, y:number):number{
//   let hipotenusa = ((x**2) + (y**2))**(1/2);
//   return hipotenusa;
// }

// console.log(hipotenusa(3, 4));

//13
// function areaTriangulo(base: number, altura: number){
//   let area: number  = (base*altura)/2;
//   return area;
// }

// console.log(areaTriangulo(5, 10));

//14
//assumindo pi = 3.14
// function areacirculo (raio: number){
//   let area = (3.14*(raio)**2);
//   return area;
// }

// console.log(areacirculo(8));

//15
// function calcula(x: number): string{
//   if (x > 0){
//     let quadrado: number = x**2;
//     let cubo: number = x**3;
//     let raizQ: number = x**(1/2);
//     let raizC: number = x**(1/3);

//     return "Quadrado: " + quadrado + " Cubo: " + cubo + " Raiz Quadrada: " + raizQ + " Raiz Cúbica: " + raizC;
//   }
//   else {
//     return `Número invalido!`;
//   }
// }

// console.log(calcula(91));

//16
// function eleva (x: number, y: number): number{
//   return x**y;
// }

// console.log(eleva(2,2));