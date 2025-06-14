document.getElementById('loginBtn').addEventListener('click', function (event) {
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const link = document.getElementById('loginLink');

    // Verifica se email e senha estão preenchidos
    if (email === '' || senha === '') {
      alert('Por favor, preencha todos os campos.');
      event.preventDefault(); // Impede o redirecionamento
      return;
    }

    // Validação básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Digite um e-mail válido.');
      event.preventDefault();
      return;
    }

    // Tudo certo, o redirecionamento vai acontecer normalmente
  });