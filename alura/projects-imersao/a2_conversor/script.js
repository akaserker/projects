function converte() {
  let valorElemento = document.getElementById("valor");
  let valor = valorElemento.value;
  let valorPX = parseFloat(valor);
  let valorREM = valorPX * 0.063;
  let elementoValorConvertido = document.getElementById("valorConvertido");
  let valorConvertido = `${valor} PX são ${(valorREM)} rem`;
  elementoValorConvertido.innerHTML = valorConvertido;
}

/* removido parseInt do exercício original para trazer o resultado real */
