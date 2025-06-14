document.addEventListener('DOMContentLoaded', function() {
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    const message = document.getElementById('message');

    forgotPasswordForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        
        // Validação simples do e-mail
        if (!validateEmail(email)) {
            message.className = 'message error';
            message.textContent = 'Por favor, insira um e-mail válido.';
            return;
        }
        
        // Simulação de envio bem-sucedido
        message.className = 'message success';
        message.textContent = `Um e-mail com as instruções foi enviado para ${email}. Verifique sua caixa de entrada.`;
        
        // Em uma aplicação real, você faria uma chamada AJAX para o servidor aqui
        // fetch('/api/forgot-password', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ email: email }),
        // })
        // .then(response => response.json())
        // .then(data => {
        //     if (data.success) {
        //         message.className = 'message success';
        //         message.textContent = data.message;
        //     } else {
        //         message.className = 'message error';
        //         message.textContent = data.message;
        //     }
        // })
        // .catch(error => {
        //     message.className = 'message error';
        //     message.textContent = 'Ocorreu um erro. Tente novamente mais tarde.';
        // });
    });

    // Função para validar e-mail
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});