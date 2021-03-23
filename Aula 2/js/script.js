primeiroValor = parseFloat(
    prompt("Digite o primeiro valor:")
)

segundoValor = parseFloat(
    prompt("Digite o segundo valor:")
)

operacao = parseFloat(
    prompt("Digite 1 para divisão\n"+
    "Digite 2 para multiplicação\n"+
    "Digite 3 para soma\n"+
    "Digite 4 para subtração\n")
)

    if (isNaN(primeiroValor)) {
        primeiroValor = 0
    }
    if (isNaN(segundoValor)) {
        segundoValor = 0
    }

    if (operacao == "1") {
        sinal = "/"
        resultado = primeiroValor / segundoValor
    }
        else if (operacao == "2") {
            sinal = "*"
            resultado = primeiroValor * segundoValor
        }
            else if (operacao == "3") {
                sinal = "+"
                resultado = primeiroValor + segundoValor
            }
                else if (operacao == "4") {
                    sinal = "-"
                    resultado = primeiroValor - segundoValor
                }
    else{
        document.write("Opção inválida");
    }

    document.write(primeiroValor + sinal + segundoValor + " = " + resultado)