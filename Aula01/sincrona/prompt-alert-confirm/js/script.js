// permitir ao usuario cadastrar um array de músicos
// diálogo, confirmação ou alerta?

// qtos músicos?
let n = prompt("quantos músicos deseja cadastrar?");
console.log(n);
// alert(n);

// nome de cada um?
let musicos = [];
for (let i = 0; i < n; i++) {
    musicos.push(prompt("nome: "));
}
console.log(musicos);

// varrer um array facilmente
// musicos.forEach(element => alert(element));
for (const musico of musicos) {
    alert(musico);
}

// varrer um objeto facilmente
let personagem = {
    nome: 'mari',
    idade: 33,
    genero: 'mulher'
}
for (let campo in personagem) {
    console.log(campo, personagem[campo]); // nome do campo, conteúdo do campo
}

let certeza = confirm("tem certeza???");
certeza ? console.log("sim, certeza absoluta") : alert("tudo bem ter dúvidas!")