async function buscarUsuario() {
    try {
        const resposta = await fetch("https://jsonplaceholder.typicode.com/users/5");
        const dados = await resposta.json();
        const nomeUsuario = dados.name;

        // Exibe o nome do usuário na tela
        document.getElementById("usuarioNome").innerText = `Nome do Usuário: ${nomeUsuario}`;
    } catch (erro) {
        console.error("Erro ao buscar os dados:", erro);
    }
}

// Chama a função para buscar os dados
buscarUsuario();
