window.onload = () => {
    // selecionar o elemento do campo 1
    let field1 = document.querySelector('#field1');

    // selecionar o elemento do botão
    let btn = document.getElementById('#btn');

    // atribuir um event listener
        // selecionar o valor digitado no campo 1 pelo usuário
        // criar um novo elemento li
        // inserir o valor digitado no interior da li
        // atribuir a li como filha da ol
    btn.addEventListener('click', (evt) => {
        evt.preventDefault();
        let li = document.createElement('li');
        li.innerText = field1.value;
        document.querySelector('ol').appendChild(li);

        let img = document.createElement('img');
        img.setAttribute('src', 'https://loremflickr.com/320/240');
        document.querySelector('main').appendChild(img);
    });
}