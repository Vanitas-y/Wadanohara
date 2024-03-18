
const botao = document.querySelector(".btn-langs");
const elementoLangs = document.querySelector(".btn-langs .langs");

botao.addEventListener('click', () => {
    elementoLangs.classList.toggle("ativo")
});
