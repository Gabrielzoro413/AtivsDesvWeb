function encontrarProdutoComPrecoMaiorQue50(produtos) {
    return produtos.find(produto => produto.preco > 50);
}

// Exemplo de uso
const produtos = [
    { nome: "Produto A", preco: 40 },
    { nome: "Produto B", preco: 90 },
];

const produtoEncontrado = encontrarProdutoComPrecoMaiorQue50(produtos);

console.log(produtoEncontrado); 
