let email = document.getElementById('email');
let senha = document.getElementById('password');
let botao = document.getElementById('btn');

botao.addEventListener('click', async function login(event) {
    event.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
})