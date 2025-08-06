const fullMessage = "🎉 Feliz Aniversário, Arthur! 🎉<br><br>" +
  "Hoje não é só mais um número no calendário, é o dia que marca o começo de mais um capítulo na tua história, irmão.<br><br>" +
  "15 anos de vida, e mesmo tão novo, você já carrega uma lealdade e uma alegria que fazem qualquer pessoa se sentir bem ao seu lado.<br>" +
  "Não importa se estamos jogando, conversando ou só rindo de besteira... você sempre tá lá, sendo você mesmo, com essa energia única que contagia todo mundo.<br><br>" +
  "Quem tem a sorte de te ter como amigo sabe o privilégio que é.<br>" +
  "Você é daqueles caras que tá junto em qualquer momento, nos altos e nos baixos, e é por isso que a gente valoriza cada instante contigo.<br><br>" +
  "Espero que esse novo ano traga pra você tudo aquilo que você sonha — e muito mais.<br>" +
  "Que venham as vitórias, as conquistas, as risadas, as madrugadas jogando e as histórias que ainda vamos construir.<br><br>" +
  "Arthur, você merece o mundo, e o mundo tem sorte de te ter aqui.<br><br>" +
  "Tamo junto, sempre. De verdade.<br>Feliz aniversário, irmão. ❤️";

let charIndex = 0;
let messageShown = false;

function typeMessage() {
  const textElement = document.getElementById('typing-text');

  if (charIndex < fullMessage.length) {
    if (fullMessage.substring(charIndex, charIndex + 4) === "<br>") {
      textElement.innerHTML += "<br>";
      charIndex += 4;
    } else {
      textElement.innerHTML += fullMessage.charAt(charIndex);
      charIndex++;
    }
    setTimeout(typeMessage, 120);
  } else {
    document.querySelector('.cursor').style.display = 'none';
  }
}

function tocarMusica() {
  const audio = document.getElementById('audioFinal');
  audio.play();
}

function ativarSom() {
  document.getElementById('audioFinal').play().then(() => {
    document.getElementById('botaoSom').style.display = 'none';
  }).catch(() => {
    alert("Clique no botão novamente para ativar o som.");
  });
}

function updateCountdown() {
  const targetDate = new Date("2025-08-07T00:00:00-03:00").getTime();
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 1000) {
    if (!messageShown) {
      messageShown = true;
      document.getElementById("main-title").innerHTML = "🎉 Chegou o grande dia, Arthur! 🎉";
      document.getElementById("message").classList.remove("hidden");
      typeMessage();
      tocarMusica();
    }
    return;  // Para de atualizar o contador depois
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, '0');
  document.getElementById("hours").textContent = String(hours).padStart(2, '0');
  document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
  document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 500);  // Atualiza a cada 500ms
updateCountdown();  // Atualiza logo de cara
