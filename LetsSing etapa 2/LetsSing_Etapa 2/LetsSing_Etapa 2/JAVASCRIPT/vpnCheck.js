document.addEventListener("DOMContentLoaded", () => {
    const API_KEY = "41552989bd3f496fbdb2c0396f3146ec"; // Substitua pela sua chave de API

    fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            console.log("Dados do IP:", data); // Para debug

            const isVPN = data.security && data.security.is_vpn;
            const countryCode = data.country_code;

            if (isVPN) {
                alert("Acesso negado: uso de VPN detectado.");
                window.location.href = "acesso_negado.html";
            }

            // Bloqueio adicional por país (ex: permitir apenas Brasil)
            // if (countryCode !== "BR") {
            //   alert("Acesso permitido apenas a partir do Brasil.");
            //   window.location.href = "acesso_negado.html";
            // }
        })
        .catch(error => {
            console.error("Erro ao verificar IP:", error);
        });
});
