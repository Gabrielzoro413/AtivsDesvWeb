
document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário para realizar a validação
    
    const nome = document.getElementById("nome").value;
    
    if (nome.trim() === "") {
        alert("O campo nome não pode estar vazio!");
    } else {
        alert("Formulário enviado com sucesso!");
    }
});
