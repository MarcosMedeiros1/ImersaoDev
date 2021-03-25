secret = parseInt(Math.random() * 10)
tentativas = 3

while (tentativas > 0) {
    chute = parseInt(prompt("Digite um número entre 0 e 10\n" +
    "Tentativas: " + tentativas))

    if (chute == secret) {
        alert("Acertou!")
        break
    }
        else if (chute < secret) {
            alert("O número secreto é maior")
            tentativas--
        }
            else if (chute > secret) {
                alert("O número secreto é menor")
                tentativas--
            }
}

    if (chute != secret) {
    alert("Tentativas acabram. O número secreto era: " + secret)
    }