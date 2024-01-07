// Crear todas las 52 cartas posibles

const mazo = [1,2,3,4,5,6,7,8,9,10,10,10,10]

const colores = ["Corazon", "Pica", "Diamante", "Trebol"]



let dealerNum = document.getElementById("dealerNum")
let dealerListAux = document.getElementById("dealerList")
let dealerList = []
let dealerSum = 0

let playerNum = document.getElementById("playerNum")
let playerListAux = document.getElementById("playerList")
let playerList = []
let playerSum = 0


function randomNum() {
    return mazo[Math.floor(Math.random() * mazo.length)]
}

function randomColor(){
    return colores[Math.floor(Math.random() * colores.length)]
}

function checkval(number){
    if (number > 21){
        alert("Te pasaste de 21, Has perdido!")
        window.location.reload()
    } else if (number == 21){
        alert("BlackJack, ha esperar lo que tiene el dealer")
        hold();
    }
}

function draw() {
    let num = randomNum()
    playerSum += num
    
    
    playerList.push(num)
    playerListAux.innerText = playerList.join(', ')
    // checkval(playerSum)
    playerNum.innerText = playerSum;

    setTimeout(function (){
        checkval(playerSum);
    }, 10 )
    // playerNum.innerText = playerSum
}

function hold() {
    function loop() {
        let num = randomNum();
        dealerSum += num;
        dealerList.push(num);
        dealerListAux.innerText = dealerList.join(', ');

        dealerNum.innerText = dealerSum;


        if ((dealerSum > playerSum && dealerSum <22) || (dealerSum == 21 && playerSum != 21)){
            alert("La casa gana, Derrota!");
            // window.location.reload();

        }
        if ((playerSum == dealerSum) && (playerSum != 21)){
            alert("Ha ocurrido un empate!");
            // window.location.reload();
        }

        if (dealerSum > 21){
            alert("El jugador ha ganado, Victoria!");
            
            return;
        }
        setTimeout(loop, 1000);
    }

    setTimeout(loop, 1000);
}


