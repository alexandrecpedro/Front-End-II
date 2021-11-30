window.onload = () => {
    let titulo = document.querySelector('h1');
    
    titulo.addEventListener('mouseover', colorChange);
    
    function colorChange(event) {
      titulo.style.color = 'black';
      console.log(`aconteceu um ${event.type} no titulo`);
    }
    
    // arrow function - anônima
    titulo.addEventListener('mouseout', (evento) => {
      titulo.style.color = 'white';
      console.log(`aconteceu um ${evento.type} no titulo`);
    })
    
    
    let field1 = document.querySelector('#field1');
    let field2 = document.querySelector('#field2');
    let btn = document.querySelector('#btn');
    let list = document.querySelector('ol');
    
    btn.addEventListener('click', (event) => {
      console.log('clicou em mim');
    
      // prevent the event (in case of form, don't send it for backend)
      event.preventDefault(); 
      
      let li = document.createElement('li');
      li.innerText = `campo 1: ${field1.value}, campo 2: ${field2.value}`;
    
      list.appendChild(li);
    })
    
    // add image
    let img = document.createElement('img');
    img.setAttribute('src', document.querySelector('#img-url').value);
}