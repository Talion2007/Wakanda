const imagens = document.querySelectorAll("#slider img");
let imagemAtual = 0;

function mostrarImagem(index) {
    imagens.forEach((img) => (img.style.display = "none"));
    imagens[index].style.display = "block";
}

function proximaImagem() {
    imagemAtual = (imagemAtual + 1) % imagens.length;
    mostrarImagem(imagemAtual);
}

function anteriorImagem() {
    imagemAtual = (imagemAtual - 1 + imagens.length) % imagens.length;
    mostrarImagem(imagemAtual);
}

mostrarImagem(imagemAtual)

let intervalo = setInterval(proximaImagem, 2000)