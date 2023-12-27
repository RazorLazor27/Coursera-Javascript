let count = 0
let array = []


auxContador = document.getElementById("contador")
auxLista = document.getElementById("lista")


function aumentar() {
    count += 1
    auxContador.innerText = count
}

function reset() {
    count = 0
    auxContador.innerText = count

}

function save() {
    // guardar = count
    array.push(count)
    count = 0
    auxContador.innerText = count
    auxLista.innerText = array
}

function reset_list(){
    array = []
    auxLista.innerText = array
}

