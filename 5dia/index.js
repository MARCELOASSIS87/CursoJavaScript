// Hoisting o jacascrip move as funções pra cima para serem executadas primeiro
// Function decalration
function movie() {
    console.log('Dentro da função movie')
}
movie()

// Function expression

const car = function () {
    console.log('Tesla')
}
car()

const truck = car

truck()

function price() {
    let total = 0
    for (let value of arguments)
        total += value
    return total
}
//Ela não limita a quantidade de argumentos,
//eu disse pega todos os argumentos e faça isso
console.log(price(10, 20, 30, 40))

//configurando default

function carLoan(loan, rate =2.5, years){
    return loan * rate/100 *years
}

console.log(carLoan(20000, 2.5, 5))