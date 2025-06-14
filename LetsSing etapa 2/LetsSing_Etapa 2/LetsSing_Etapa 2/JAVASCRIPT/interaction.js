document.getElementById('fileUpload').addEventListener('change', function (e) {
    const spinner = document.getElementById('spinner');
    const uploadLabel = document.getElementById('uploadLabel');

    uploadLabel.style.display = 'none';
    spinner.style.display = 'block';

    // Simula envio (substitua pelo seu fetch real)
    setTimeout(() => {
        spinner.style.display = 'none';
        uploadLabel.style.display = 'block';
        uploadLabel.innerHTML = '✔️ Arquivo enviado com sucesso!';
    }, 3000);
});




