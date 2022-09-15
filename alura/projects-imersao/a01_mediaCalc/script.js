function mediaNota() {
  const nomeAluno = prompt("Primeiramente, qual seu nome?");
  const primeiraNota = parseInt(
    prompt("Qual foi a sua nota no primeiro bimestre?")
  );
  const segundaNota = parseInt(
    prompt("Qual foi a sua nota no segundo bimestre?")
  );
  const terceiraNota = parseInt(
    prompt("Qual foi a sua nota no terceiro bimestre?")
  );
  const quartaNota = parseInt(
    prompt("Qual foi a sua nota no quarto bimestre?")
  );
  const mediaFinal =
    (primeiraNota + segundaNota + terceiraNota + quartaNota) / 4;

  if (mediaFinal >= 7) {
    alert(
      "Parabéns " +
        nomeAluno +
        " sua média final é: " +
        mediaFinal +
        "! Boas férias!"
    );
  } else {
    alert(
      "Poxa " +
        nomeAluno +
        " sua média final foi: " +
        mediaFinal +
        "! Vamos estudar mais um pouco"
    );
  }
}

function mediaFaltas() {
  const nomeAluno = prompt("Primeiramente, qual seu nome?");
  const faltasJaneiro = parseInt(
    prompt("Quantas vezes você faltou no mês de Janeiro")
  );
  const faltasFevereiro = parseInt(
    prompt("Quantas vezes você faltou no mês de Fevereiro")
  );
  const faltasMarço = parseInt(
    prompt("Quantas vezes você faltou no mês de Março")
  );
  const faltasAbril = parseInt(
    prompt("Quantas vezes você faltou no mês de Abril")
  );
  const faltasMaio = parseInt(
    prompt("Quantas vezes você faltou no mês de Maio")
  );
  const faltasJunho = parseInt(
    prompt("Quantas vezes você faltou no mês de Junho")
  );
  const faltasJulho = parseInt(
    prompt("Quantas vezes você faltou no mês de Julho")
  );
  const faltasAgosto = parseInt(
    prompt("Quantas vezes você faltou no mês de Agosto")
  );
  const faltasSetembro = parseInt(
    prompt("Quantas vezes você faltou no mês de Setembro")
  );
  const faltasOutubro = parseInt(
    prompt("Quantas vezes você faltou no mês de Outubro")
  );
  const faltasNovembro = parseInt(
    prompt("Quantas vezes você faltou no mês de Novembro")
  );
  const faltasDezembro = parseInt(
    prompt("Quantas vezes você faltou no mês de Dezembro")
  );

  const mediaFaltasFinal = Math.floor(
    (faltasJaneiro +
      faltasFevereiro +
      faltasMarço +
      faltasAbril +
      faltasMaio +
      faltasJunho +
      faltasJulho +
      faltasAgosto +
      faltasSetembro +
      faltasOutubro +
      faltasNovembro +
      faltasDezembro) /
      12
  );

  if (mediaFaltasFinal <= 7) {
    alert(
      "Parabéns " +
        nomeAluno +
        ", você teve uma média de " +
        mediaFaltasFinal +
        " faltas por mês! Continue com a dedicação!"
    );
  } else {
    alert(
      "Poxa " +
        nomeAluno +
        ", sua média de faltas por mês foi de: " +
        mediaFaltasFinal +
        "! Precisamos conversar!"
    );
  }
}
