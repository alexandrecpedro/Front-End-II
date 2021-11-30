// selecionar o primeiro h1
let titulo = document.querySelector('h1');
console.log(titulo);

// selecionar TODOS os h2
let subtitulos = document.querySelectorAll('h2');
console.log(subtitulos);

// callback a ser chamada para cada elemento
// for (const sub of subtitulos) { console.log(sub) };

subtitulos.forEach(element => { console.log(element) });

// selecionar o elemento com classe 'conteúdo'
console.log(document.getElementsByClassName('conteudo'));

// selecionar o elemento com id 'diferente'
console.log(document.getElementById('diferente'));

// selecionar o h1 que está dentro da section
console.log(document.querySelector('section h1'));

// usar o prompt para alterar o conteúdo de uma tag HTML
document.querySelector('section h1').innerHTML = prompt("Insira o novo título: ");