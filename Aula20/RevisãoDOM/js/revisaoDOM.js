let inputText = document.getElementById('input');

let btn = document.getElementById('adicionar');

//Exemplo 1 - ação no OnClick
function revisaoDOM() {
    let nome = inputText.value;
    
    let nomeTemplate = `O nome do usuário é: ${nome}`;
    
    console.log(nomeTemplate);
};

//Exemplo 2 - EventListner no botão de adicionar
btn.addEventListener('click', (event) => {
    event.preventDefault();
    
    let nome = inputText.value;
    
    let nomeTemplate = `O nome do usuário é: ${nome}`;
    
    console.log(nomeTemplate);
    
    console.log(document.querySelector('h3').innerHTML);
    
    // document.querySelector('h3').innerHTML = "<strong>Inner</strong>";
    
    // document.querySelector('h3').innerText = inputText.value;

    console.log("\nManipulando nós com o DOM");

    let novoTexto = document.createTextNode("Digital House Brasil");
    
    console.log(novoTexto.data);
    document.querySelector('h3').innerText = novoTexto.data;

    console.log("\nAdicionando elementos na lista com o DOM\n");

    let itemDescricao = document.createTextNode("Digital House Brasil");
    let novoItem = document.createElement('li');

    novoItem.appendChild(itemDescricao);

    document.getElementById('lista').appendChild(novoItem);

    console.log("\nRemover elementos na lista com o DOM\n");

    let listaUl = document.getElementById('lista');
    
    listaUl.removeChild(listaUl.lastElementChild);
    listaUl.removeChild(listaUl.firstElementChild);
});
