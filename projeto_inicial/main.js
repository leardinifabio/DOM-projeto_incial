//querySelector percorre na árvore do DOM
//createElement manipula elementos na árvore do DOM

//IIFE, ou Immediately Invoked Function Expression ou “Função de Invocação Imediata”.

import BotaoConclui from './componentes/concluiTarefas.js'
import BotaoDeleta from './componentes/deletaTarefas.js'

const criarTarefa = (evento) => {

    evento.preventDefault()
    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')

    const conteudo = `<p class="content">${valor}</p>`

    tarefa.innerHTML = conteudo

    lista.appendChild(tarefa)
    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
    input.value = ''
}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)