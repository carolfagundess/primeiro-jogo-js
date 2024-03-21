
//declara variaveis
let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//mostrar o número que foi gerado
console.log(numeroSecreto);

exibirMensagemIncial();

//usa uma taga html para receber um texto
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

//execução da function
function exibirMensagemIncial() {
    exibirTextoNaTela('h1', 'Secret Number Game');
    exibirTextoNaTela('p', 'Escolha um nímero entre 1 e 10');
}

function verificarChute() {
    //testar se o botao foi clicado
    console.log('O botão foi clicado');
    //pegar o chute do user
    let chute = document.querySelector('input').value;
    //validando se é true ou false
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns! Você acertou o número');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `O número secreto foi descoberto em ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor que o chute');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior que o chute');
        }
        //aumenta tentativas e limpa o input
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    //gera um numero e armazena na variavel numeroEscolhido
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = listaNumerosSorteados.length;

    if (quantidadeElementosLista == numeroLimite) {
        listaNumerosSorteados = [];
    }

    //se o numeroEscolhido estiver na lista é gerado um novo numero
    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        //se nao estiver na lista é adicionado a lista
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

//function para limpar o input, usando queryselector
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

//function para reiniciar o jogo, usando outras functions
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio()
    limparCampo();
    tentativas = 1;
    exibirMensagemIncial();
    //desabilita o botao novo jogo
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

