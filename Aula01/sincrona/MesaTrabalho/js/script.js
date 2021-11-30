// MESA DE TRABALHO - CALCULANDO A MÉDIA
/* MICRO DESAFIO - ETAPA I

A secretaria de uma escola contratou a sua empresa para desenvolver sua plataforma de gestão de alunos, 
sendo uma dessas partes a criação de um sistema que calcule as notas obtidas ao longo do semestre. 
Você e seu grupo fazem parte da equipe responsável por implementar esta funcionalidade no sistema.

Para isso, crie um script que permita adicionar uma sequência de números (um array de números) 
consecutivamente para receber as notas dos 4 bimestres. 
Após isso, crie uma estrutura na qual todos os números do array sejam somados sequencialmente: 
o primeiro número seja somado ao segundo e o resultado seja impresso no console. 
Então, temos que pegar esse resultado e adicionar o terceiro número a ele, e assim por diante, 
até terminarmos de percorrer o array.

Por fim, a soma desses números deve ser dividida pelo total de bimestres (4) para calcular a média 
e guardada em uma variável, a qual deve ser exibida no console. */

/* MICRO DESAFIOS - ETAPA II 

Terminada esta etapa é hora de preparar o código para ficar mais amigável ao usuário final, 
com mensagens que informem a nota do aluno e sua condição:

(ITEM A) Utilizando a função console.log informe a nota que o aluno teve em cada um dos bimestres 
e por fim sua nota final. Por exemplo: “Parabéns pela conclusão do primeiro bimestre. Sua nota foi: 8.”;

(ITEM B) Após mostrar a nota final, crie uma estrutura de decisão que informe se o aluno foi aprovado 
ou não, sendo a média da escola 7.

(ITEM C) Por fim, comente as etapas do código. */

let array = [];
let tamanhoArray = prompt("Tamanho do array: ");
for (let i = 0; i < tamanhoArray; i++) {
    let bimestre = Number(prompt("Nota do bimestre: "));
    array.push(bimestre);
}
let index = 0;
let soma = 0;
while (index < tamanhoArray) {
    alert(`Parabéns pela conclusão do ${index + 1} bimestre. Sua nota foi: ${array[index]}.`);
    soma += array[index];
    index != 0 ? alert(`Soma das notas: ${soma}`) : soma;
    index++;
}
let media = array.reduce((total, atual) => { return total += atual }, 0).toFixed(2);
media >= 7 ? confirm(`Parabéns você aprovado!!!`) : confirm(`Infelizmente não deu :( \nRefaça a disciplina`);