function filtrarMaioresQueDez(array) {
    return array.filter(numero => numero > 10);
}

// Exemplo de uso
const numeros = [5, 19, 8, 15, 8, 20];
const maioresQueDez = filtrarMaioresQueDez(numeros);

console.log(maioresQueDez); // [12, 15, 20]
