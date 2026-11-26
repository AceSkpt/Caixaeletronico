
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Caixa da Putaria</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="caixa">

        <header>
            <div>
                <h1>💸 Caixa da Putaria</h1>
                <p>Seu dinheiro entra, mas será que sai?</p>
            </div>

            <span id="status">Dormindo 😴</span>
        </header>

        <main>

            <!-- Tela inicial -->
            <section id="telaInicial">
                <h2>😏 Seja bem-vindo, safadinho!</h2>
                <p>Insira seu cartão e venha movimentar essa conta...</p>

                <button onclick="inserirCartao()">
                    💳 Enfiar o cartão
                </button>
            </section>

            <!-- Área do caixa eletrônico -->
            <section id="telaCaixa" class="escondido">

                <div class="saldo">
                    <p>💰 Seu patrimônio disponível</p>
                    <h2 id="saldo">R$ 1.500,00</h2>
                </div>

                <h3>🔥 Escolha o que vai fazer:</h3>

                <div class="botoes">
                    <button onclick="consultarSaldo()">
                        👀 Ver quanto tem na conta
                    </button>

                    <button onclick="mostrarSaque()">
                        🍑 Meter um saque
                    </button>

                    <button onclick="mostrarDeposito()">
                        💦 Depositar uma graninha
                    </button>
                </div>

                <!-- Formulário de saque -->
                <div id="areaSaque" class="operacao escondido">
                    <h3>🍑 Hora de sacar!</h3>

                    <label>Quanto você quer tirar?</label>
                    <input type="number" id="valorSaque" placeholder="Ex: 100">

                    <button onclick="prepararSaque()">
                        😈 Quero continuar
                    </button>

                    <button class="secundario" onclick="voltar()">
                        Melhor deixar quieto
                    </button>
                </div>

                <!-- Formulário de depósito -->
                <div id="areaDeposito" class="operacao escondido">
                    <h3>💦 Hora de depositar!</h3>

                    <label>Quanto vai colocar nessa brincadeira?</label>
                    <input type="number" id="valorDeposito" placeholder="Ex: 200">

                    <button onclick="prepararDeposito()">
                        😏 Mandar ver
                    </button>

                    <button class="secundario" onclick="voltar()">
                        Fiquei com vergonha
                    </button>
                </div>

                <!-- Confirmação -->
                <div id="confirmacao" class="operacao escondido">
                    <h3>😳 Tem certeza disso?</h3>

                    <p id="mensagemConfirmacao"></p>

                    <button onclick="confirmarOperacao()">
                        🔥 Confirmar, sem medo!
                    </button>

                    <button class="secundario" onclick="cancelarOperacao()">
                        🏃 Arregar e cancelar
                    </button>
                </div>

                <!-- Mensagens -->
                <div id="mensagem" class="mensagem">
                    Cartão aceito! Agora é só sentar e escolher a safadeza. 😈
                </div>

                <p class="contador">
                    Safadezas financeiras realizadas: 
                    <span id="contador">0</span>
                </p>

                <button class="retirar" onclick="retirarCartao()">
                    👋 Tirar o cartão e ir embora
                </button>

            </section>

        </main>

        <footer>
            😂 Simulação 100% fictícia. Aqui só entra dinheiro e sai vergonha!
        </footer>

    </div>

    <script src="script.js"></script>
</body>
</html>
