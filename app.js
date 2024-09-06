function pesquisar() {
  // Obtém a seção onde os resultados serão exibidos
  let section = document.getElementById('resultados-pesquisa');

  let campoPesquisa = document.getElementById('campo-pesquisa').value;

  if (campoPesquisa == '') {
    section.innerHTML = '<p>Nada foi encontrado. Digite o nome do filme ou série</p>'
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase();
  // Inicializa uma string vazia para armazenar os resultados
  let resultados = '';
  let titulo = '';

  // Itera sobre os dados e constrói o HTML para cada resultado
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    if (titulo.includes(campoPesquisa)) {
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
  }

  if (!resultados) {
    resultados = '<p>Nada foi encontrado. O filme ou série não está no meu banco de dados</p>'
  }
  // Atribui o HTML gerado à seção de resultados
  section.innerHTML = resultados;
}