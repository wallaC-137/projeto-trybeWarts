const getBtn = document.getElementById('btn');
const getEmail = document.getElementById('e-mail');
const getPass = document.getElementById('senha');
const getBtnSend = document.getElementById('submit-btn');
const getCheckbox = document.getElementById('agreement');
getBtnSend.disabled = true;

getCheckbox.addEventListener('click', () => {
  if (getBtnSend.disabled === true) {
    getBtnSend.disabled = false;
  } else {
    getBtnSend.disabled = true;
  }
});

/**
 * Requesito 3: retorna 'Olá, Tryber!' se email e senha certo e 'Email ou senha inválidos.' se inválido;
 */
const alertMsg = () => {
  getBtn.addEventListener('click', () => {
    if (getEmail.value === 'tryber@teste.com' && getPass.value === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
};

alertMsg();
