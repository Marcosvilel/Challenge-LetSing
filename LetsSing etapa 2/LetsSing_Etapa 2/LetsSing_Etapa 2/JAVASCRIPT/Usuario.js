document.addEventListener('DOMContentLoaded', function() {
  // Alternar entre os tipos de assinatura
  const signatureType = document.getElementById('signatureType');
  const digitalSignature = document.getElementById('digitalSignature');
  const manualSignature = document.getElementById('manualSignature');
  const certificateSignature = document.getElementById('certificateSignature');
  
  signatureType.addEventListener('change', function() {
    digitalSignature.style.display = 'none';
    manualSignature.style.display = 'none';
    certificateSignature.style.display = 'none';
    
    const selectedType = this.value;
    document.getElementById(selectedType + 'Signature').style.display = 'block';
    
    // Inicializar o canvas de assinatura manual quando selecionado
    if (selectedType === 'manual' && !signaturePad) {
      initSignaturePad();
    }
  });
  
  // Inicializar o canvas de assinatura manual
  let signaturePad;
  function initSignaturePad() {
    const canvas = document.getElementById('signaturePad');
    signaturePad = new SignaturePad(canvas, {
      backgroundColor: 'rgb(255, 255, 255)',
      penColor: 'rgb(0, 0, 0)'
    });
    
    // Ajustar o canvas quando a janela for redimensionada
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
  }
  
  function resizeCanvas() {
    const canvas = document.getElementById('signaturePad');
    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    
    canvas.width = canvas.offsetWidth * ratio;
    canvas.height = canvas.offsetHeight * ratio;
    canvas.getContext('2d').scale(ratio, ratio);
    
    if (signaturePad) {
      signaturePad.clear(); // Limpa a assinatura ao redimensionar
    }
  }
  
  // Botão Limpar assinatura
  document.getElementById('clearSignature')?.addEventListener('click', function() {
    if (signaturePad) {
      signaturePad.clear();
    }
  });
  
  // Botão Salvar assinatura
  document.getElementById('saveSignature')?.addEventListener('click', function() {
    if (signaturePad && !signaturePad.isEmpty()) {
      const signatureData = signaturePad.toDataURL(); // Pega a assinatura como imagem
      alert('Assinatura salva com sucesso!');
      // Aqui você pode enviar a assinatura para o servidor
    } else {
      alert('Por favor, desenhe sua assinatura antes de salvar.');
    }
  });
  
  // Validação ao assinar documento
  document.getElementById('signDocument')?.addEventListener('click', function(e) {
    const agreeTerms = document.getElementById('agreeTerms');
    
    if (!agreeTerms.checked) {
      e.preventDefault();
      alert('Por favor, concorde com os termos antes de assinar o documento.');
      return;
    }
    
    // Verificar se a assinatura foi fornecida
    const selectedType = signatureType.value;
    let signatureValid = true;
    
    if (selectedType === 'manual' && signaturePad && signaturePad.isEmpty()) {
      signatureValid = false;
      alert('Por favor, forneça sua assinatura manual antes de continuar.');
    }
    
    if (signatureValid) {
      // Simular envio da assinatura
      console.log('Documento assinado com sucesso!');
      alert('Documento assinado com sucesso! Redirecionando...');
      // Aqui você pode redirecionar ou enviar os dados para o servidor
    }
  });
  
  // Mostrar a assinatura digital por padrão
  digitalSignature.style.display = 'block';
});




// Função para gerar o QR Code

  function gerarQRCode() {
    const canvas = document.getElementById('qrCanvas');
    const qr = new QRious({
      element: canvas,
      size: 200,
      value: '/teste/validaçaoFacial.html'
    });
    canvas.style.display = 'block';
    document.getElementById('hideQrBtn').style.display = 'inline-block';
    document.getElementById('showQrBtn').style.display = 'none';
  }

  function ocultarQRCode() {
    const canvas = document.getElementById('qrCanvas');
    canvas.style.display = 'none';
    document.getElementById('hideQrBtn').style.display = 'none';
    document.getElementById('showQrBtn').style.display = 'inline-block';
  }




  // Verifica se há câmera disponível ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
  if (hasCamera()) {
    document.getElementById('facialValidationBtn').style.display = 'inline-block';
  }
});

// Função para verificar se o dispositivo tem câmera
function hasCamera() {
  return navigator.mediaDevices && navigator.mediaDevices.enumerateDevices && navigator.mediaDevices.getUserMedia;
}

// Função para iniciar validação facial
function iniciarValidacaoFacial() {
  if (!document.getElementById('agreeEasyValidation').checked) {
    alert('Por favor, concorde com a validação fácil primeiro.');
    return;
  }
  
  // Aqui você pode redirecionar para a página de validação facial
  // ou iniciar o processo diretamente nesta página
  window.location.href = 'teste/validaçaoFacial.html'; // ajuste a URL conforme necessário
  
  // Ou iniciar a câmera diretamente:
  // navigator.mediaDevices.getUserMedia({ video: true })
  //   .then(function(stream) {
  //     // Lógica para processamento facial
  //   })
  //   .catch(function(err) {
  //     alert('Erro ao acessar a câmera: ' + err.message);
  //   });
}


document.addEventListener("DOMContentLoaded", function () {
  const digitalSignature = document.getElementById("digitalSignature");
  const createBtn = document.getElementById("createSignatureBtn");

  createBtn.addEventListener("click", function () {
    // Evita duplicar os elementos
    if (!digitalSignature.querySelector("input")) {
      // Campo de texto para a assinatura
      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = "Digite sua assinatura";
      input.classList.add("form-control");
      input.style.marginTop = "15px";
      input.id = "signatureInput";

      // Botão para confirmar a assinatura
      const confirmBtn = document.createElement("button");
      confirmBtn.textContent = "Confirmar Assinatura";
      confirmBtn.classList.add("btn", "btn-success");
      confirmBtn.style.marginTop = "10px";
      confirmBtn.id = "confirmSignatureBtn";

      // Resultado da assinatura
      const resultDiv = document.createElement("div");
      resultDiv.id = "signatureResult";
      resultDiv.style.marginTop = "15px";

      // Evento de confirmação
      confirmBtn.addEventListener("click", function () {
        const assinatura = input.value.trim();
        if (assinatura !== "") {
          resultDiv.textContent = `Assinatura confirmada: ${assinatura}`;
        } else {
          resultDiv.textContent = "Por favor, digite sua assinatura.";
        }
      });

      // Adiciona elementos
      digitalSignature.appendChild(input);
      digitalSignature.appendChild(confirmBtn);
      digitalSignature.appendChild(resultDiv);
    }
  });
});

// Adicionando hover effect via JavaScript para manter consistência
  document.getElementById('createSignatureBtn').addEventListener('mouseover', function() {
    this.style.backgroundColor = '#6363D3'; // Cor secundária para hover
  });
  
  document.getElementById('createSignatureBtn').addEventListener('mouseout', function() {
    this.style.backgroundColor = '#33336D'; // Volta para a cor primária
  });





  