const items = [
    {
        id: 0,
        nome: 'camiseta',
        img: 'perfil.jpg',
        quantidade: 0
    },

    {
        id: 1,
        nome: 'bermuda',
        img: 'perfil.jpg',
        quantidade: 0
    },

    {
        id: 2,
        nome: 'sapato',
        img: 'perfil.jpg',
        quantidade: 0
    }
]

inicializarLoja = () => {
    let containerProdutos = document.getElementById('produtos')
    items.map((val)=> {
       containerProdutos.innerHTML += `
       
        <div class="produto-single">
            <img src="`+val.img+`" />
            <p>`+val.nome+`</p>
            <a key="`+val.id+`" href="">Adicionar ao carrinho</a>
        </div>
       `
    })
}

inicializarLoja()