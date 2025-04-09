window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [
      {url: "../static/api.autenticar.yaml", name: "Autenticar obter o Token"},
      {url: "../static/api.cidade.yaml", name: "CRUD Cidade"},
      {url: "../static/api.lotacao.yaml", name: "CRUD Lotação"},
      {url: "../static/api.pessoa.yaml", name: "CRUD Pessoa"},
      {url: "../static/api.servefetivo.yaml", name: "CRUD Servidor Efetivo"},
      {url: "../static/api.servidortemporario.yaml", name: "CRUD Servidor Temporario"},
      {url: "../static/api.unidade.yaml", name: "CRUD Unidade"},
      {url: "../static/api.efetivoslotados.yaml", name: "Consulta Efetivos Lotados"},
      {url: "../static/api.enderecofuncional.yaml", name: "Consulta de Endereço Funcional"},
      {url: "../static/api.fotopessoa.yaml", name: "Foto da Pessoa"}
    ],    
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });

  //</editor-fold>
};
