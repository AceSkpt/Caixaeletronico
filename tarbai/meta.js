let saldo = 1500;
let operacoes = 0;
let operacaoPendente = null;

function formatarValor(valor) {
    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
}

function atualizarSaldo() {
    document.getElementById("saldo").textContent = formatarValor(saldo);
    document.getElementById("contador").textContent = operacoes;
}

function mostrarMensagem(texto) {
    document.getElementById("mensagem").textContent = texto;
}

function esconderOperacoes() {
    document.getElementById("areaSaque").classList.add("escondido");
    document.getElementById("areaDeposito").classList.add("escondido");
    document.getElementById("confirmacao").classList.add("escondido");
}

function inserixerecard() {
    document.getElementById("telaInicial").classList.add("escondido");
    document.getElementById("telaCaixa").classList.remove("escondido");
    document.getElementById("status").textContent = "Colocou direitinho";
    atualizarSaldo();
    mostrarMensagem("Cartão inserido. Escolha uma operação.");
}

function consultarmalote() {
    esconderOperacoes();
    mostrarMensagem("Saldo atual: " + formatarValor(saldo));
}

function mostrarSaka() {
    esconderOperacoes();
    document.getElementById("areaSaque").classList.remove("escondido");
    document.getElementById("valorSaque").value = "";
    document.getElementById("valorSaque").focus();
}

function mostrarpataco() {
    esconderOperacoes();
    document.getElementById("areaDeposito").classList.remove("escondido");
    document.getElementById("valorDeposito").value = "";
    document.getElementById("valorDeposito").focus();
}

function Saka() {
    const valor = Number(document.getElementById("valorSaque").value);

    if (!valor || valor <= 0) {
        mostrarMensagem("Digite um valor válido para o saque.");
        return;
    }

    if (valor > saldo) {
        mostrarMensagem("Saldo insuficiente para realizar o saque.");
        return;
    }

    operacaoPendente = { tipo: "saque", valor: valor };
    document.getElementById("mensagemConfirmacao").textContent =
        "Confirmar saque de " + formatarValor(valor) + "?";
    document.getElementById("confirmacao").classList.remove("escondido");
}

function depois() {
    const valor = Number(document.getElementById("valorDeposito").value);

    if (!valor || valor <= 0) {
        mostrarMensagem("Digite um valor válido para o depósito.");
        return;
    }

    operacaoPendente = { tipo: "deposito", valor: valor };
    document.getElementById("mensagemConfirmacao").textContent =
        "Confirmar depósito de " + formatarValor(valor) + "?";
    document.getElementById("confirmacao").classList.remove("escondido");
}

function rocinha() {
    if (!operacaoPendente) {
        return;
    }

    if (operacaoPendente.tipo === "saque") {
        saldo -= operacaoPendente.valor;
        mostrarMensagem("Saque realizado: " + formatarValor(operacaoPendente.valor));
    } else {
        saldo += operacaoPendente.valor;
        mostrarMensagem("Depósito realizado: " + formatarValor(operacaoPendente.valor));
    }

    operacoes++;
    operacaoPendente = null;
    atualizarSaldo();
    esconderOperacoes();
}

function desisti() {
    operacaoPendente = null;
    esconderOperacoes();
    mostrarMensagem("Operação cancelada.");
}

function policia() {
    desisti();
}

function goze() {
    operacaoPendente = null;
    esconderOperacoes();
    document.getElementById("telaCaixa").classList.add("escondido");
    document.getElementById("telaInicial").classList.remove("escondido");
    document.getElementById("status").textContent = "Desligado";
}