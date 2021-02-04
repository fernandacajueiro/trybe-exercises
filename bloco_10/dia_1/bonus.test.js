const searchEmployee = require('./bonus');

describe('Testes da função searchEmployee', () => {
  test('Testa se searchEmployee é uma função', () => {
    expect(typeof(searchEmployee)).toBe('function');
  });
  test('Testa mensagem de erro se o ID não for encontrado', () => {
    expect(() => { searchEmployee(), searchEmployee('1111-1', 'firstName') }).toThrowError(new Error('ID não identificada'));
  });
  test('Testa se o parâmetro detail da função existe', () => {
    expect(() => { searchEmployee('8579-6', 'first') }).toThrowError(new Error('Informação indisponível'));
  });
  test('Testa se searchEmployee(id, "firstName") retorna o primeiro nome do usuário', () => {
    const actual = searchEmployee('8579-6', 'firstName');
    const expected = 'Ana';
    expect(actual).toBe(expected);
  });
  test('Testa se searchEmployee(id, "lastName") retorna o sobrenome do usuário', () => {
    const actual = searchEmployee('8579-6', 'lastName');
    const expected = 'Gates';
    expect(actual).toBe(expected);
  });
  test('Testa se searchEmployee(id, "specialities") retorna um array com as especialidades', () => {
    const actual = searchEmployee('8579-6', 'specialities');
    const expected = ['UX', 'Design'];
    expect(actual).toEqual(expected);
  });
});
