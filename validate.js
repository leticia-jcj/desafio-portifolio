document.addEventListener("DOMContentLoaded", function () {
  // Função para validar o formulário de contato
  function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var assunto = document.getElementById("assunto").value;
    var mensagem = document.getElementById("mensagem").value;

    // Verifica se algum campo está vazio
    if (nome === "" || email === "" || assunto === "" || mensagem === "") {
      alert("Por favor, preencha todos os campos.");
      return false; // Impede o envio do formulário
    }
    // Validação básica do formato do email
    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Por favor, insira um endereço de email válido.");
      return false; // Impede o envio do formulário
    }
    return true; // Permite o envio do formulário se tudo estiver válido
  }

  // Adiciona um ouvinte de evento para o envio do formulário
  document
    .querySelector(".formcontato__form")
    .addEventListener("submit", function (event) {
      // Cancela o envio do formulário se a validação não passar
      if (!validarFormulario()) {
        event.preventDefault();
      }
    });
});
