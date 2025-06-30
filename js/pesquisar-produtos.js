function procurar() {
    let input = document.getElementById('input-pesquisar').value.toLowerCase()
    let x = document.getElementsByClassName('itens')// itens é a id do que vai ser localizado, o produto
    let encontrou = 0

    for( let i = 0; i < x.length; i++) {
        if(!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none"
        } else {
            x[i].style.display = "block"
            encontrou++
        }
    }
    // mensagem de item não encontrado
    let mensagem = document.getElementById('nao-encontrado')
    if (encontrou === 0) {
        mensagem.classList.add('mostrar-mensagem')
    } else {
        mensagem.classList.remove('mostrar-mensagem')
    }
}

window.onload = function () {
    document.getElementById('input-pesquisar').value = ''
    procurar()
}