// a árvore dos elementos/nós do documento HTML e o DOM

// pegar um elemento/nó (primeiro)
let a = document.querySelector('a');

// alterar conteúdo interno e estilos
a.innerText += ' com muita confiança!';
a.style.fontSize = '30px';

// funções para manipular atributos de um nó: hasAttribute, getAttribute, setAttribute, removeAttribute
console.log(a.hasAttribute('href'));
a.hasAttribute('href') ? console.log(a.getAttribute('href')) : console.log('sem ref');
    // alterar elemento
a.setAttribute('href', 'http://www.digitalhouse.com/br');
    // remove elemento
a.removeAttribute('href');

// criar um nó parágrafo
let paragrafo = document.createElement('p');
// inserir conteúdo e estilo
paragrafo.innerText = "meu novo páragrafo pelo js";
paragrafo.style.color = 'red';
// adicionar ao final da página
document.body.appendChild(paragrafo);

// remover o parágrafo
document.body.removeChild(paragrafo);

// adicionando outra parágrafo dentro da primeira div
let par2 = document.createElement('p');
par2.innerText = "um outro parágrafo";
par2.style.backgroundColor = 'yellow';
document.querySelector('div').appendChild(par2);

// criar uma lista com ordenação do tipo "a" contendo 3 itens
let lista = document.createElement('ol');
lista.style.listStyleType = 'lower-latin';
// lista.setAttribute('type', 'a');

for (let i = 1; i <= 3; i++) {
    let item = document.createElement('li');
    item.innerText = `${i}o elemento da lista`;
    lista.appendChild(item);
}

// adicionar ao final da página
document.body.appendChild(lista);

// remover o segundo item da lista
let itens = document.querySelectorAll('li');
lista.removeChild(itens[1]);