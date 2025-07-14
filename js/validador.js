function convertirTemperatura(valor, de, a) {
  if (de === a) return valor;

  switch (de + "→" + a) {
    case "C→K": return valor + 273;
    case "C→F": return valor * 9/5 + 32;
    case "K→C": return valor - 273;
    case "K→F": return (valor - 273) * 9/5 + 32;
    case "F→C": return (valor - 32) * 5/9;
    case "F→K": return (valor - 32) * 5/9 + 273;
    default: return valor;
  }
}

module.exports = convertirTemperatura;