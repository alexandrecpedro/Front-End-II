let cards = document.querySelector("#cards");

async function tarefas() {
  let url = `https://jsonplaceholder.typicode.com/todos/`;

  let resposta = await fetch(url);

  let arrayTarefas = await resposta.json();

  arrayTarefas.forEach((tarefa) => {
    if (tarefa.completed === true) {
      cards.innerHTML += `<div><p>${tarefa.id}: <del>${tarefa.title}</del></p></div>`;
    } else {
      cards.innerHTML += `<div><p>${tarefa.id}: <b>${tarefa.title}</b></p></div>`;
    }
  });
}

tarefas();
