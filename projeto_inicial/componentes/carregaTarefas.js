import {
    ordenaDatas,
    removeDatasRepetidas
} from "../service/data.js"
import {
    criaData
} from "./criaData.js"

export const carregaTarefas = () => {
    const lista = document.querySelector('[data-list]') /* utilizado para percorrer a ávore do DOM */
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || [] /* pega as tarefas ou cria um array vazio */

    lista.innerHTML = " "

    const datasUnicas = removeDatasRepetidas(tarefasCadastradas)
    ordenaDatas(datasUnicas)
    datasUnicas.forEach((dia) => {
        lista.appendChild(criaData(dia))
    })
}