const listaSelecaoPersonagens = document.querySelectorAll(".personagem");

listaSelecaoPersonagens.forEach((personagem) => {
  personagem.addEventListener("click", () => {
    const cartaoPersonagemAberto = document.querySelector(".aberto");
    cartaoPersonagemAberto.classList.remove("aberto");

    const idPersonagemSelecionado = personagem.attributes.id.value;

    const idDoCartaoPersonagemParaAbrir = "cartao-" + idPersonagemSelecionado;
    const cartaoPersonagemParaAbrir = document.getElementById(
      idDoCartaoPersonagemParaAbrir
    );
    cartaoPersonagemParaAbrir.classList.add("aberto");

    const personagemAtivoNaListagem = document.querySelector(".ativo");
    personagemAtivoNaListagem.classList.remove("ativo");

    const personagemSelecionadoNaListagem = document.getElementById(
      idPersonagemSelecionado
    );
    personagemSelecionadoNaListagem.classList.add("ativo");
  });
});
