function convertir() {
  const valor = parseFloat(document.getElementById("valor").value);
  const de = document.getElementById("de").value;
  const a = document.getElementById("a").value;

  if (isNaN(valor)) {
    alert("Por favor ingrese un valor numérico válido");
    return;
  }

  let resultado = convertirTemperatura(valor, de, a);

  document.getElementById("resultado").textContent =
    `Resultado: ${resultado.toFixed(2)} °${a}`;

  guardarEnHistorial(valor, de, a, resultado);
  mostrarHistorial();
}

function convertirTemperatura(valor, de, a) {
  if (de === a) return valor;

  switch (de + "→" + a) {
    case "C→K": return valor + 273.15;
    case "C→F": return valor * 9/5 + 32;
    case "K→C": return valor - 273.15;
    case "K→F": return (valor - 273.15) * 9/5 + 32;
    case "F→C": return (valor - 32) * 5/9;
    case "F→K": return (valor - 32) * 5/9 + 273.15;
    default: return valor;
  }
}
