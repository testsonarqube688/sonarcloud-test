function megaProcessador(usuario, permissao, hora, dia) {
  if (usuario) {
    if (permissao === 'admin') {
      if (hora > 8 && hora < 18) {
        if (dia !== 'domingo') {
          if (usuario.ativo) {
            console.log('Acesso liberado');
          }
        }
      }
    }
  } else {
    console.log('Acesso negado');
  }
}

module.exports = { megaProcessador };
