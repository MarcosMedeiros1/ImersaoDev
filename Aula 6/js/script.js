let jogador1 = {
    nome: "Jogador 1",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}

let jogador2 = {
    nome: "Jogador 2",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
}


let jogadores = [jogador1, jogador2]

function calculaPontos(jogador) {
    let pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
}

function exibirJogadores(jogadores) {
    let html = ""
    for (let i = 0; i < jogadores.length; i++) {
        html += "<tr><td>" + jogadores[i].nome + "</td>"
        html += "<td>" + jogadores[i].vitorias + "</td>"
        html += "<td>" + jogadores[i].empates + "</td>"
        html += "<td>" + jogadores[i].derrotas + "</td>"
        html += "<td>" + jogadores[i].pontos + "</td>"
        html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>" 
    }
    let tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = html
}

exibirJogadores(jogadores)

function adicionarVitoria(i) {
    let jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadores(jogadores)
}

function adicionarEmpate(i) {
    let jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibirJogadores(jogadores)
}

function adicionarDerrota(i) {
    let jogador = jogadores[i]
    jogador.derrotas++
    exibirJogadores(jogadores)
}