function atualizarRelogio() {
    const agora = new Date();
    let horas = String(agora.getHours()).padStart(2, '0');
    let minutos = String(agora.getMinutes()).padStart(2, '0');
    let segundos = String(agora.getSeconds()).padStart(2, '0');
    
    const horaFormatada = `${horas}:${minutos}:${segundos}`;
    
    document.getElementById("relogio").innerText = horaFormatada;
}

// Atualiza o relógio a cada segundo
setInterval(atualizarRelogio, 1000);

// Chama a função imediatamente para exibir a hora sem esperar o primeiro intervalo
atualizarRelogio();
