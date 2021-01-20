const states = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
const select = document.getElementById('states');

function createStates() {
  for (let index = 0; index < states.length; index += 1) {
    const option = document.createElement('option');
    select.appendChild(option);
    option.value = states[index].toLowerCase();
    option.innerText = states[index];
  }
}

/* function validateDate() {
  const date = document.getElementById('start-date').value;
  if (date.indexOf('/') === 2 || date.indexOf('/') === 5) {
    const day = date.substring(0, 2);
    const month = date.substring(3, 5);
    const year = date.substring(6, 10);
    if ((day < 0 && day > 31) || (month < 0 && month > 12) || (year < 0 && year.length !== 4)) {
      alert('Formato de data inválido!');
    }
  }
} */

window.onload = function () {
  createStates();
  /* validateDate(); */
}
