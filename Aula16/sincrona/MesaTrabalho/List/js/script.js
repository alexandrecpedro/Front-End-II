// Mesa - Alexandre Pedro, Jehan Lucas, Diego Decrescenzo, Nayla Ueda, Wallace Souza, Wesley Bueno

window.onload = () => {
    let btn = document.querySelector('#btn');
    let ol = document.querySelector('ol');

    btn.addEventListener('click', event => {
        event.preventDefault();
        ol.innerHTML = "";

        // API do GitHub para pegar os repositórios de um certo usuário em formato json
        let url = `https://reqres.in/api/users?page=2`;

        fetch(url) // comunicação assíncrona - envia um GET para a url
            .then(resposta => resposta.json()) // quando chegar a resposta, objetifique o dado para o formato json
            .then(reposArray => { // quando o objeto json estiver pronto (ele é um array de repositorios!)
                // varrer todo o array, utilizando o campo name de cada item do array (repositorio) para inserir na lista
                reposArray.data.forEach((repo) => {
                  ol.innerHTML += `<li>
                  <h2>${repo.first_name} ${repo.last_name}</h2>
                  <img src=${repo.avatar}></img>
                  </li>`})
            })
            .catch(error => console.log(`houve um erro! ${error}`)); // quando o json estiver pronto, mostre o array de repos no log
    });
}