function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById('resultados-pesquisa');

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = '';

    // Itera sobre os dados e constrói o HTML para cada resultado
    for (let dado of dados) {
        // Cria um novo elemento div para cada resultado
        resultados += `
        <div class="item-resultado">
          <h2>${dado.titulo}</h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <h3><a href="${dado.link}"target="_blank">IMDb</a></h3>
          <h4 class="descricao-meta">Nota: ${dado.nota}</h4>
        </div>
      `;
    }
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = resultados;
}