let themeChange = () => { 
    document.body.classList.toggle('dark');
}

let input = document.querySelector('input');
// input.onclick = themeChange();

input.addEventListener('click', themeChange);