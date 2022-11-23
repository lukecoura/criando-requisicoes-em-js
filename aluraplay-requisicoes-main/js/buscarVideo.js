import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

const botaoDePesquisa = document.querySelector('[data-botao-pesquisa]');

async function buscarVideo(evento) {
    evento.preventDefault();

    const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    const lista = document.querySelector('[data-lista]');

    busca.forEach(elemento => lista.appendChild(constroiCard(
        elemento.titulo,
        elemento.descricao,
        elemento.url,
        elemento.imagem
    )))
}

botaoDePesquisa.addEventListener('click', evento => buscarVideo(evento));