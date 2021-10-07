//querySelector percorre na árvore do DOM
//createElement manipula elementos na árvore do DOM

//IIFE, ou Immediately Invoked Function Expression ou “Função de Invocação Imediata”.

(() => {

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

    const BotaoConclui = () => {
        const botaoConclui = document.createElement('button')

        botaoConclui.classList.add('check-button')
        botaoConclui.innerText = 'concluir'

        botaoConclui.addEventListener('click', concluirTarefa)

        return botaoConclui
    }

    const concluirTarefa = (evento) => {

        const botaoConclui = evento.target
        const tarefaCompleta = botaoConclui.parentElement
        tarefaCompleta.classList.toggle('done') //toggle devolve um booleano (v ou f)

    }

    const BotaoDeleta = () => {

        const botaoDeleta = document.createElement('button')

        botaoDeleta.innerText = 'deletar'
        botaoDeleta.addEventListener('click', deletarTarefa)

        return botaoDeleta
    }

    const deletarTarefa = (evento) => {

        const botaoDeleta = evento.target
        const tarefaCompleta = botaoDeleta.parentElement
        tarefaCompleta.remove()

        return botaoDeleta
    }

})()