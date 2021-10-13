import {
    criaData
} from "./criaData.js"

export const carregaTarefas = () => {
    const lista = document.querySelector('[data-list]') /* utilizado para percorrer a ávore do DOM */
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || [] /* pega as tarefas ou cria um array vazio */

    lista.innerHTML = " "

    tarefasCadastradas.forEach((tarefa) => {
        const dia = moment(tarefa.dataFormatada, 'DD/MM/YYYY')
        lista.appendChild(criaData(dia))
    })
}