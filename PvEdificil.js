// difícil, de 0 à 100
let listaDeNumerosSorteados = [];
let numLimite = 100;
let numMagico = gerarNumeroAleatorio();
let tentativas = 0;

while (true) {
    let numDigitado = Number(prompt('Adivinhe o número: '))
    tentativas++
    if (numDigitado > numMagico) {
        alert('O número mágico é menor.')
    } else if(numDigitado < numMagico){
        alert('O número mágico é maior.')
    } else {
        alert('Você acertou o número : ' + numMagico)
        break; // sair do loop quando o usuário adivinha o número mágico
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`)

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}