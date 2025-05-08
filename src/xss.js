// Entrada de usuário sendo colocada diretamente em HTML
function gerarHTML(nomeUsuario) {
  return `<div>Bem-vindo, ${nomeUsuario}</div>`; // vulnerável a XSS
}

module.exports = { gerarHTML };
