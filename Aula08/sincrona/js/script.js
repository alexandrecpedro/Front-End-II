// selecionando elementos
let div = document.querySelector('.main');
let colorBtn = document.querySelector('button');
let loginBtn = document.querySelector('#login');
let sumBtn = document.querySelector('#sum');

// define a callback para o evento
let colorChange = (event) => {
    console.log(`colorChange Tipo do evento: ${event.type}`);
    div.classList.toggle('dark');
    colorBtn.classList.toggle('light');
    loginBtn.classList.toggle('light');
    sumBtn.classList.toggle('light');
}

// configurando a callBack com propriedade onclick
colorBtn.onclick = colorChange;
colorBtn.onclick = () => { console.log('minha segunda callback pelo onclick')}; // sobreescreve a função anterior

// configurando a callBack com o addEventListener
colorBtn.addEventListener('click', colorChange);

colorBtn.addEventListener('click', function(e) {
    console.log('com addEventListener, vc pode adicionar várias callBacks para o mesmo evento de um mesmo elemento!!!!');
    console.log(`Tipo do evento: ${e.type}`);
});

// usando arrow function!
colorBtn.addEventListener('mouseover', (e) => {
    console.log('agora outra callback criada com arrow function');
    console.log(`Tipo do evento: ${e.type}`);
});

// disparando a soma sem enviar pro backend - preventDefault()
sumBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    // console.log('Faça outra coisa');
    let x = +document.querySelector('#x').value; // como se fizéssemos o parseInt
    let y = parseInt(document.querySelector('#y').value);

    let p = document.createElement('p');
    p.innerText = x + y;
    document.getElementById('sum-form').appendChild(p);
});

// keydown, keyup, keypress
let inputx = document.querySelector('#x');
let inputy = document.querySelector('#y');

// keydown = todas teclas
inputx.addEventListener('keydown', (evt) => { console.log(evt.type, evt.key)});
// keypress = não reconhece o que não gera texto (ALT, SHIFT, CTRL, etc)
inputx.addEventListener('keypress', (evt) => { console.log(evt.type, evt.key)});
// para pegar todo o conteúdo do campo, INCLUSIVE a última tecla pressionada
inputx.addEventListener('keyup', (evt) => { console.log(evt.type, evt.key)});

inputx.addEventListener('keyup', () => {
    let x = document.querySelector('#x').value; // todo conteúdo campo x (String)
    document.querySelector('p').innerText = x.lenght;
});

// mouseOut x mouseLease
document.getElementById('outerBox').addEventListener('mouseover', (evt) => {
    console.log(`outerbox: ${evt.type}`);
});

document.getElementById('outerBox').addEventListener('mouseout', (evt) => {console.log(`outerBox: ${evt.type}`)});
document.getElementById('innerBox').addEventListener('mouseout', (evt) => {console.log(`innerBox: ${evt.type}`)});

document.getElementById('outerBox').addEventListener('mouselease', (evt) => {console.log(`outerBox: ${evt.type}`)});
document.getElementById('innerBox').addEventListener('mouselease', (evt) => {console.log(`innerBox: ${evt.type}`)});