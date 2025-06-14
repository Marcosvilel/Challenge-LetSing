document.addEventListener('DOMContentLoaded', function() {
    const addSignerBtn = document.querySelector('.sign-button.primary');
    const signatoryForm = document.getElementById('signatoryForm');
    const dataContainer = document.querySelector('.data-container .container-fluid');
    const emptyMessage = document.querySelector('.data-row');
    
    // Função para validar CPF (simplificada)
    function validateCPF(cpf) {
        cpf = cpf.replace(/[^\d]+/g,'');
        return cpf.length === 11;
    }

    // Função para validar email
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Função para validar o formulário
    function validateForm() {
        const cpf = document.getElementById('cpf').value;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const signAs = document.getElementById('signAs').value;
        const authMethod = document.getElementById('authMethod').value;
        const birthDate = document.getElementById('birthDate').value;
        
        if (!name) {
            alert('Por favor, informe o nome completo.');
            return false;
        }
        
        if (!validateCPF(cpf)) {
            alert('CPF inválido. Por favor, verifique.');
            return false;
        }
        
        if (!validateEmail(email)) {
            alert('Email inválido. Por favor, verifique.');
            return false;
        }
        
        if (signAs === "") {
            alert('Por favor, selecione "Assinar como".');
            return false;
        }
        
        if (authMethod === "") {
            alert('Por favor, selecione o método de autenticação.');
            return false;
        }
        
        if (!birthDate) {
            alert('Por favor, informe a data de nascimento.');
            return false;
        }
        
        return true;
    }
    
    // Função para formatar a data
    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR');
    }
    
    // Função para adicionar signatário
    function addSignatory() {
        if (!validateForm()) return;
        
        // Remove mensagem de "Nenhum signatário" se for o primeiro
        if (emptyMessage && emptyMessage.innerHTML.includes('Nenhum signatário')) {
            emptyMessage.remove();
        }
        
        // Obtém os valores do formulário
        const cpf = document.getElementById('cpf').value;
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const signAs = document.getElementById('signAs').options[document.getElementById('signAs').selectedIndex].text;
        const authMethod = document.getElementById('authMethod').options[document.getElementById('authMethod').selectedIndex].text;
        const birthDate = formatDate(document.getElementById('birthDate').value);
        
        // Verifica métodos de envio selecionados
        const sendMethods = [];
        if (document.getElementById('emailOption').checked) sendMethods.push('Email');
        if (document.getElementById('smsOption').checked) sendMethods.push('SMS');
        if (document.getElementById('whatsappOption').checked) sendMethods.push('WhatsApp');
        
        // Cria a nova linha de dados
        const newRow = document.createElement('div');
        newRow.className = 'row data-row gx-5 align-items-center';
        newRow.innerHTML = `
            <div class="col text-center"><span>${name}</span></div>
            <div class="col text-center"><span>${email}</span></div>
            <div class="col text-center"><span>${sendMethods.join(', ') || 'Nenhum'}</span></div>
            <div class="col text-center"><span>${authMethod}</span></div>
            <div class="col text-center"><span>${cpf}</span></div>
            <div class="col text-center"><span>${birthDate}</span></div>
        `;
        
        // Adiciona a nova linha ao container
        dataContainer.appendChild(newRow);
        
        // Limpa o formulário
        signatoryForm.reset();
    }
    
    // Event listener para o botão
    addSignerBtn.addEventListener('click', function(e) {
        e.preventDefault();
        addSignatory();
    });
});