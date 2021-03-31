let carta1 = {
    nome: "Túrin filho de Húrin",
    atributos: {
        ataque: 80,
        defesa: 65,
        magia: 50
    }
}

let carta2 = {
    nome: "Fëanor",
    atributos: {
        ataque: 90,
        defesa: 75,
        magia: 70
    }
}

let carta3 = {
    nome: "Morgoth",
    atributos: {
        ataque: 95,
        defesa: 80,
        magia: 90
    }
}

let cartas = [
    carta1,
    carta2,
    carta3
]

function sortearCarta() {
    let numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina]

    let numeroCartaJogador = parseInt(Math.random() * 3)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 3)
    }
    cartaJogador = cartas[numeroCartaJogador]
    
    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false

    exibirOpcoes()
}

function exibirOpcoes() {
    let opcoes = document.getElementById('opcoes')
    let opcoesTexto = ""
    for(let atributo in cartaJogador.atributos){
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
    }
    opcoes.innerHTML = opcoesTexto
}

function getAtributo() {
    let radioAtributo = document.getElementsByName('atributo')
    for(let i=0; i< radioAtributo.length; i++){
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    let atributo = getAtributo()

    if (cartaJogador.atributos[atributo] > cartaMaquina.atributos[atributo]) {
        alert("Winner Winner Chicken Dinner!")
    }
        else if (cartaJogador.atributos[atributo] < cartaMaquina.atributos[atributo]) {
            alert("Looser!")    
        }
            else{
                alert("Empate!")
            }
}