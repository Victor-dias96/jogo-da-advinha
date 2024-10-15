var numberToFind = 0; // variável que começa no 0
var attempts = 0; // número de tentativas
var maxAttempts = 5;

function refresh() { // gera um número aleatório
    numberToFind = Math.floor(Math.random() * 20) + 1; // gera número de 1 a 20
    attempts = 0;
    document.getElementById('message').innerText = ''; // limpa a mensagem
    document.getElementById('restartBtn').style.display = 'none'; // esconde o botão de reiniciar
}

function verifyNumber() {
    var bet = parseInt(document.getElementById('bet').value);
    
    if (bet < 1 || bet > 20) {
        alert('Aposta inválida! Digite um número entre 1 e 20.');
        return;
    }

    attempts++; 

    if (bet === numberToFind) {
        alert('Parabéns, você acertou e teve apenas ' + (attempts - 1) + ' erros!');
        document.getElementById('restartBtn').style.display = 'block'; 
        alert('Você esgotou suas tentativas! O número era ' + numberToFind + '.');
        document.getElementById('restartBtn').style.display = 'block'; 
    } else {
        var remainingAttempts = maxAttempts - attempts;
        var hint = bet < numberToFind ? 'MAIOR' : 'MENOR'; 
        alert('Número errado! Tente um número ' + hint + '. Você ainda tem ' + remainingAttempts + ' tentativas.');
    }
}

function restartGame() {
    refresh(); 
}


refresh();