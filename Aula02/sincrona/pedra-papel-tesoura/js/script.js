// jogo pedra-papel-tesoura

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

let matchStatus = (user, machine) => {
    switch (user) {
        case 1:
            switch (machine) {
                case 2:
                    pointsmachine++;
                    return "Machine wins!"
                case 3:
                    pointsuser++;
                    return `${player} wins!`
                default:
                    return "Draw!"
            }
        case 2:
            switch (machine) {
                case 1:
                    pointsuser++;
                    return `${player} wins!`
                case 3:
                    pointsmachine++;
                    return "Machine wins!"
                default:
                    return "Draw!"
            }
        default:
            switch (machine) {
                case 1:
                    pointsmachine++;
                    return "Machine wins!"
                case 2:
                    pointsuser++;
                    return `${player} wins!`
                default:
                    return "Draw!"
            }
    }
};

const formatChoice = (choice) => {
    switch (choice) {
      case 1:
        return "Pedra";
      case 2:
        return "Papel";
      case 3:
        return "Tesoura";
      default:
        return "Undefined";
    }
};
  
const handlePlayRockPaperAndScissors = () => {
    // Dados Usuário
    let player = prompt("Nome do jogador: ");
    // Jogada Usuário
    const input = +prompt("Digite o número de sua escolha: Pedra(1), Papel(2) ou Tesoura(3)");
    // Pontuação Usuário
    let pointsuser = 0;

    // Jogada Máquina
    // let machine = parseInt(Math.random()*3 + 1);
    const computer = getRandomInt(1, 4); // get a random number from 1 to 3
    // Pontuação Máquina
    let pointsmachine = 0;
  
    const message = `Escolha do usuário: ${formatChoice(input)} 
    \nEscolha da máquina: ${formatChoice(computer)} 
    \nResultado: ${matchStatus(input, computer)}`;
  
    [1, 2, 3].includes(input) ? alert(message) : alert("Insira uma opção válida!");
};