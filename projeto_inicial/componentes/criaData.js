export const criaData = (data) => {

    const dataTopo = document.createElement('li')
    const conteudo = `<p class="content-data">${data.format('DD/MM/YYYY')}</p>`

    dataTopo.innerHTML = conteudo

    return dataTopo

}