const convertirTemperatura = require('./validador');

describe('convertirTemperatura', () => {
  test('de Celsius a Kelvin', () => {
    expect(convertirTemperatura(0, 'C', 'K')).toBeCloseTo(273.15);
  });

  test('de Celsius a Fahrenheit', () => {
    expect(convertirTemperatura(100, 'C', 'F')).toBeCloseTo(212);
  });

  test('de Kelvin a Celsius', () => {
    expect(convertirTemperatura(273.15, 'K', 'C')).toBeCloseTo(0);
  });

  test('de Kelvin a Fahrenheit', () => {
    expect(convertirTemperatura(273.15, 'K', 'F')).toBeCloseTo(32);
  });

  test('de Fahrenheit a Celsius', () => {
    expect(convertirTemperatura(32, 'F', 'C')).toBeCloseTo(0);
  });

  test('de Fahrenheit a Kelvin', () => {
    expect(convertirTemperatura(32, 'F', 'K')).toBeCloseTo(273.15);
  });

  test('cuando unidades son iguales', () => {
    expect(convertirTemperatura(123, 'C', 'C')).toBe(123);
    expect(convertirTemperatura(123, 'K', 'K')).toBe(123);
    expect(convertirTemperatura(123, 'F', 'F')).toBe(123);
  });

  test('caso por defecto: unidades no válidas', () => {
    expect(convertirTemperatura(100, 'X', 'Y')).toBe(100);
  });
});
