// Exemplo de funcionalidade simples: alerta ao clicar em um link de projeto
document.addEventListener('DOMContentLoaded', function () {
    const githubLink = document.querySelector('#projetos a');
    if (githubLink) {
      githubLink.addEventListener('click', function (e) {
        alert('Você será redirecionado para o GitHub.');
      });
    }
  });
  