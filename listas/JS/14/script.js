function somarNumeros(array) {
    return array.reduce((acumulador, numero) => acumulador + numero, 0);
}

const numeros = [1, 2, 3, 4, 5];
const soma = somarNumeros(numeros);

console.log(soma);
