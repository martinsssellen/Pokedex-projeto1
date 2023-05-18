const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");


botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modoescuro");

    body.classList.toggle("modoescuro");

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/pokebola-rodando.gif");
    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/pikachu1.gif");
    }
});