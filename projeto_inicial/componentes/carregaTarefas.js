import {
    Tarefa
} from "./criaTarefas.js"

export const carregaTarefas = () => {
    const lista = document.querySelector('[data-list]') /* utilizado para percorrer a ávore do DOM */
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || [] /* pega as tarefas ou cria um array vazio */

    tarefasCadastradas.forEach((tarefa) => {
        lista.appendChild(Tarefa(tarefa))
    })
}