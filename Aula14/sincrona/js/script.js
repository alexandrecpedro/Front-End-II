window.onload = () => {
  // executado no load/carregamento da página
  let nome = document.getElementById('nome');
  let sobrenome = document.getElementById('sobrenome');
  let btn = document.getElementById('btn');
  let ol = document.querySelector('ol');

  let nomesArray = [];

  // carrega o que já tem no storage no momento de load da pagina
  let nomesStrStorage = localStorage.getItem('nomes');
  // se não estiver vazio
  if (nomesStrStorage !== null) {
    // picota a string de nomes do storage em um array
    nomesArray = nomesStrStorage.split('\n');
    // para cada elemento do array gerado, adiciona um item na lista
    nomesArray.forEach(nome => ol.innerHTML += `<li>${nome}</li>`);
  }


  btn.addEventListener('click', event => {
    // impede o envio do form para o backend
    event.preventDefault();
    // pega o valor digitado no campo e acrescenta um item na lista
    ol.innerHTML += `<li>${nome.value}</li>`;

    // insere o novo nome no array
    nomesArray.push(nome.value);
    // junta todos os nomes do array em uma única str, separados por quebra de linha (\n)
    let nomesStr = nomesArray.join('\n');
    // salva a nova string com todos os nomes no localStorage
    localStorage.setItem('nomes', nomesStr); // dentro do storage, o item se chama 'nomes'

    console.log(nomesArray);
    console.log(nomesStr);
  });

  /*
  let pessoasArray = [];

  // pega o que já existe de pessoas no storage
  let pessoasStr = localStorage.getItem('pessoas');
  // se ja existir alguma pessoa,
  if ( pessoasStr !== null ) {
    // picotar a longa string do storage em um array de objetos stringificados
    pessoasArray = pessoasStr.split('\n');

    pessoasArray.foreach(pessoaStr => {
      let pessoaObj = JSON.parse(pessoaStr);
      ol.innerHTML += `<li>nome: ${pessoaObj.nome}, sobrenome: ${pessoaObj.sobrenome}</li>`;
    })
  } else {
    console.log('nada para carregar do storage');
  }

  btn.addEventListener('click', (event) => {
    event.preventDefault();
    // cria o objeto literal a partir dos campos do formulário
    let pessoaObj = {
      nome: nome.value,
      sobrenome: sobrenome.value
    };
    
    ol.innerHTML += `<li>nome: ${pessoaObj.nome}, sobrenome: ${pessoaObj.sobrenome}</li>`;
    // JSON por favor transforme o obj pessoa em uma string
    let pessoaStr = JSON.stringify(pessoaObj);
    // inserir o objeto da nova pessoa stringificada no array
    pessoasArray.push(pessoaStr);
    // junta todas as pessoas stringificadas do array em uma unica string
    let storageStr = pessoasArray.join('\n');
    // salva a string no localStorage com o rótulo 'pessoas'
    localStorage.setItem('pessoas', storageStr);
    console.log(storageStr);
  });
  */
}