import { conectaApi } from "./conectaApi";

const botaoDePesquisa = document.querySelector('[data-botao-pesquisa]');

async function buscarVideo(evento) {
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);
}

botaoDePesquisa.addEventListener('click', evento => buscarVideo(evento));