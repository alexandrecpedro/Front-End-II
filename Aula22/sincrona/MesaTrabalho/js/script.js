let vida = 50;
let xp = 0;
let nivel = 10;

let level = document.getElementById('nivel'); 
level.innerHTML = `Nível atual: ${nivel}`;

function curar(){       

    let barraVida = document.getElementById('vidaProgresso');

    if (vida < 100){
        vida += 10;
        barraVida.style.width = vida + "%";
        barraVida.innerHTML = vida *1 + "%";
    } else {
        alert("Pikachu está com 100% de vida!");
    }
}

function upar(){    

    let barraXP = document.getElementById('nivelProgresso');      
    
    if (xp < 90){
        xp += 10;
        barraXP.style.width = xp + "%";
        barraXP.innerHTML = xp *1 + "%";     
    } else {       
        xp = 0;
        barraXP.style.width = xp + "%";
        barraXP.innerHTML = xp *1 + "%";  
        nivel++;
        level.innerHTML = `Nível atual: ${nivel}`;        
    }
}


