// Variável global
tokenGlobal = 'abc123';

// XSS: inserção de entrada do usuário diretamente em HTML
function renderizarPerfil(usuario) {
  return `<div>Bem-vindo, ${usuario}</div>`; // sem escape!
}

module.exports = { renderizarPerfil };
