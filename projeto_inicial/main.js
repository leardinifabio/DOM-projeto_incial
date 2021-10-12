//querySelector percorre na árvore do DOM
//createElement manipula elementos na árvore do DOM

//IIFE, ou Immediately Invoked Function Expression ou “Função de Invocação Imediata”.

import {
    handleNovoItem
} from './componentes/criaTarefas.js'

import {
    carregaTarefas
} from './componentes/carregaTarefas.js'

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', handleNovoItem)

carregaTarefas()