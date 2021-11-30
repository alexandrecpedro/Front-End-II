window.onload = () => {
    let submit = document.getElementById('submit');
    submit.addEventListener('click', (evt) => {
        evt.preventDefault();
        console.log('Submit pressionado');
    })

    let p = document.querySelector('p');
    p.addEventListener('mouseover', () => {
        p.sty.color = 'red';
        console.log('mouseover');
    });
    
    p.addEventListener('mouseout', () => {
        p.style.color = 'black';
        console.log('mouseout');
    });

    let txt = document.getElementById('txt');
    txt.addEventListener('keyup', () => {
        document.getElementById('exit').innerHTML = `${txt.value} <br> ${txt.value.length}`;
    });

    alert('página carregada!');
};