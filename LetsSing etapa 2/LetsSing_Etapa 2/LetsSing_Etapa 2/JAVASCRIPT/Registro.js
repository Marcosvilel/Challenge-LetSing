
document.getElementById('registroForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value;
  const confirmarSenha = document.getElementById('confirmar-senha').value;

  if (!nome || !email || !senha || !confirmarSenha) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  if (senha !== confirmarSenha) {
    alert('As senhas não coincidem.');
    return;
  }

  // Redirecionar após validação
  window.location.href = 'Login.html';
});
