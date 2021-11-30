window.onload = () => {
  // executado no load/carregamento da página
  let comentario = document.getElementById('comment');
  let btn = document.getElementById('btn');
  let div = document.querySelector('div');

  let comentariosArray = [];

  // carrega o que já tem no storage no momento de load da pagina
  let comentariosStrStorage = localStorage.getItem('comentarios');
  // se não estiver vazio
  if (comentariosStrStorage !== null) {
    // picota a string de comentarios do storage em um array
    comentariosArray = comentariosStrStorage.split('\n');
    // para cada elemento do array gerado, adiciona um item na lista
    comentariosArray.forEach(comentario => div.innerHTML += `<p>${comentario}</p>`);
  }


  btn.addEventListener('click', event => {
    // impede o envio do form para o backend
    event.preventDefault();
    // pega o valor digitado no campo e acrescenta um item na lista
    div.innerHTML += `<p>${comentario.value}</p>`;

    // insere o novo nome no array
    comentariosArray.push(comentario.value);
    // junta todos os nomes do array em uma única str, separados por quebra de linha (\n)
    let comentariosStr = comentariosArray.join('\n');
    // salva a nova string com todos os nomes no localStorage
    localStorage.setItem('comentarios', comentariosStr); // dentro do storage, o item se chama 'nomes'

    console.log(comentariosArray);
    console.log(comentariosStr);
  });

}