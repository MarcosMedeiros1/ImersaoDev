function adicionarTrailer(){
    linkTrailer = document.querySelector('#trailer')

    trailer = linkTrailer.value

    listarTrailers(trailer)
    
    linkTrailer.value = ""
}

//Vídeo é bloqueado pelo navegador :(

function listarTrailers(trailer) {
    listatrailers = document.querySelector('#listatrailers')
    elementotrailer = "<iframe src=" +trailer+ "></iframe>"
    listatrailers.innerHTML = listatrailers.innerHTML + elementotrailer
}