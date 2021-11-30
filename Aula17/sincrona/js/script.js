window.onload = () => {
  let nome = document.querySelector('#nome');
  let btn = document.querySelector('#btn');
  let ol = document.querySelector('ol');

  btn.addEventListener('click', buscarRepo);

  // uma função que vai lidar com operações assíncronas com uso do await deve também ser assíncrona
  async function buscarRepo(event) {
    event.preventDefault();

    ol.innerHTML = "";

    // API do GitHub para pegar os repositórios de um certo usuário em formato json
    let url = `https://api.github.com/users/${nome.value}/repos`;

    // outra forma de lidar com as operações assíncronas em JS

    // operação assíncrona - precisamos ESPERAR
    let response = await fetch(url); // retorna um objeto Promisse

    // outra operação assíncrona - PRECISAMOS ESPERAR
    let arrayRepos = await response.json(); // também retorna um objeto Promisse

    // exibindo os resultados
    arrayRepos.forEach(repo => ol.innerHTML += `<li>${repo.name}</li>`);
  }
}