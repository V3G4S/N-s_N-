let mode = null;
let difficulty = 3;
let magicNumber = null;
let attempts = 0;

function startPvP() {
  mode = 'pvp';
  document.getElementById('pve-difficulty').style.display = 'none';
  document.getElementById('pve-game').style.display = 'none';
  document.getElementById('pvp-game').style.display = 'block';
}
function startPvPGuessing() {
    pvpNumber = parseInt(document.getElementById('pvp-number').value);
    pvpGuess = null;
    pvpAttempts = 0;
    document.getElementById('pvp-result').textContent = '';
    guessPvPNumber();
  }
  function guessPvPNumber() {
    pvpGuess = prompt('Jogador 2, tente adivinhar o número mágico:');
    if (pvpGuess === null) {
      // User clicked "Cancel"
      document.getElementById('pvp-result').textContent = 'Jogador 2 cancelou a tentativa.';
    } else if (isNaN(pvpGuess)) {
      document.getElementById('pvp-result').textContent = 'Chute inválido. Tente novamente.';
      guessPvPNumber();
    } else {
      pvpAttempts++;
      if (pvpGuess < pvpNumber) {
        document.getElementById('pvp-result').textContent = `Seu chute foi mais baixo que o número mágico. Tente novamente (${pvpAttempts} tentativas).`;
      } else if (pvpGuess > pvpNumber) {
        document.getElementById('pvp-result').textContent = `Seu chute foi mais alto que o número mágico. Tente novamente (${pvpAttempts} tentativas).`;
      } else {
        document.getElementById('pvp-result').textContent = `Parabéns, jogador 2! Você acertou o número mágico em ${pvpAttempts} tentativas.`;
      }
    }
  }
  
function startPvE() {
  mode = 'pve';
  document.getElementById('pve-difficulty').style.display = 'block';
}

function setDifficulty(level) {
  difficulty = level;
  generateMagicNumber();
  document.getElementById('pve-difficulty').style.display = 'none';
  document.getElementById('pve-game').style.display = 'block';
}

function generateMagicNumber() {
  switch (difficulty) {
    case 1:
      magicNumber = Math.floor(Math.random() * 10) + 1;
      break;
    case 2:
      magicNumber = Math.floor(Math.random() * 50) + 1;
      break;
    case 3:
      magicNumber = Math.floor(Math.random() * 100) + 1;
      break;
  }
  attempts = 0;
}

function checkGuess() {
  const guess = parseInt(document.getElementById('guess').value);
  attempts++;
  if (guess < magicNumber) {
    document.getElementById('result').textContent = 'Seu chute foi mais baixo que o número mágico.';
  } else if (guess > magicNumber) {
    document.getElementById('result').textContent = 'Seu chute foi mais alto que o número mágico.';
  } else {
    document.getElementById('result').textContent = `Parabéns! Você acertou o número mágico em ${attempts} tentativas.`;
    generateMagicNumber();
  }
}