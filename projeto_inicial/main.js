//querySelector percorre na árvore do DOM
//createElement manipula elementos na árvore do DOM

//IIFE, ou Immediately Invoked Function Expression ou “Função de Invocação Imediata”.

import BotaoConclui from './componentes/concluiTarefas.js'
import BotaoDeleta from './componentes/deletaTarefas.js'

const handleNovoItem = (evento) => {

    evento.preventDefault()

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valor = input.value

    const calendario = document.querySelector('[data-form-data]')
    const data = moment(calendario.value)

    const dataFormatada = (data.format('DD/MM/YYYY'))

    const dados = {
        valor,
        dataFormatada
    }

    const criaTarefa = criarTarefa(dados)

    lista.appendChild(criaTarefa)
    input.value = ''
}

const criarTarefa = ({
    valor,
    dataFormatada
}) => {

    const tarefa = document.createElement('li')
    tarefa.classList.add('task')

    const conteudo = `<p class="content">${dataFormatada} * ${valor}</p>`

    tarefa.innerHTML = conteudo

    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())

    return tarefa

}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', handleNovoItem)