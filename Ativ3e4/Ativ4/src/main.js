import './style.css'

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#app').innerHTML = `
    <div class="container">
      <h1>Clima das Cidades</h1>
      <label for="cidade">Nome da cidade:</label>
      <input type="text" id="cidade" placeholder="Ex: Fortaleza" />
      <button id="buscar">Procurar</button>
      <ul id="resultado-lista"></ul>
    </div>
  `;

  const input = document.getElementById('cidade');
  const button = document.getElementById('buscar');
  const lista = document.getElementById('resultado-lista');
  const apiKey = import.meta.env.VITE_API_KEY;

  button.addEventListener('click', async () => {
    const cidade = input.value.trim();
    if (!cidade) return;

    const cidadeFormatada = `${cidade},BR`;

    try {
      const resposta = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidadeFormatada}&appid=${apiKey}&units=metric&lang=pt_br`
      );

      if (!resposta.ok) throw new Error('Cidade não encontrada');

      const dados = await resposta.json();
      const item = document.createElement('li');
      item.innerHTML = `
        <span><strong>${dados.name}</strong>: ${dados.main.temp}°C</span>
        <button>Fechar</button>
      `;
      item.querySelector('button').addEventListener('click', () => item.remove());
      lista.appendChild(item);
      input.value = '';
    } catch (error) {
      alert('Erro: ' + error.message);
    }
  });
});
