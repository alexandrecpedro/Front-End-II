// alterar texto do h1 - innerHTML x innerText
let titulo = document.querySelector('h1');
// document.querySelector('h1').innerHTML = '<i>Novo titulo</i>';
// document.querySelector('h1').innerText = '<i>Novo titulo</i>';  //innerText = não entende tags HTML

// acrescentar texto ao h1
// document.querySelector('h1').innerText += ' <i>Demais!</i>';

// pegar um texto do prompt para alterar o h1
// usando template strings
// let novoTitulo = prompt('Insira o novo título: ');
// titulo.innerText = `O novo título é ${novoTitulo}`;

// alterar cor de fundo do body
let body = document.querySelector('body');
// body.style.backgroundColor = '#333';

// alterar cor de fundo E cor de texto do primeiro item da lista
// let item = document.querySelector('li').
// item.style.backgroundColor = '#000';
// item.style.color = '#fff';

// e se quisermos alterar também margin, padding, etc
// item.classList.add('dark');

// agora para todos os itens da lista
let itens = document.querySelectorAll('li');
// itens.map(element => element.classList.add('dark'));

// SPOILER - associando as alterações ao onclick
let colorChange = () => {
    body.classList.toggle('dark');
}
body.onclick = colorChange();