

// // let friends = ['Marcos', 'Silvia', 'Elisa']
// // friends[2] = 'Marcelo'

// // console.log(friends)

// // const num = [7, 8, 9]

// // num.push(10, 11, 12) // adiciona no fim do array
// // num.unshift(1, 2, 3) // Adiciona no começo
// // num.splice(3,0,4,5,6) //adiciona em algum lugar index a partir de qual add, se vai apagar e os valores

// // console.log(num)

// // const num2 = [6, 7, 8, 9]

// // console.log(num2.indexOf(4)) // ele trás o valor do index que o numero esta no array
// // console.log(num2.includes(8)) //diz se o numero esta ou não

// const movies = [
//     {
//         id: 1,
//         movieName: 'Dejavu'
//     },
//     {
//         id: 2,
//         movieName: 'Back to the future'
//     },
//     {
//         id: 3,
//         movieName: 'The Matrix'
//     }
// ]
// //No caso de array de referência
// console.log(movies.find(function (movie) {
//     return movie.movieName == 'The Matrix'
// }))

// // Arow function
// console.log(movies.find(movie => movie.movieName == 'The Matrix'))
// //Estou falando que é uma função e o return esta incluso

// // const num = [5, 6, 7, 8]
// // const final = num.pop()//Remove o útlimo item da array
// // const final2 = num.shift()//Remove o primeiro item do array
// // const final3 = num.splice(2,2)

// let num = [5, 6, 7, 8]

// //Zerar a array

// //num = []
// //num.length = 0
// num.splice(0, num.length)
// console.log(num)
// //console.log(final3)

let numbers = [5, 6, 7, 8]
let letters = ['a', 'b', 'c']

all = numbers.concat(letters) // Juntando arrays

half = all.slice(3, 5) //separando arrays no index 3 até antes do index 5

console.log(all)
console.log(half)


let clients = ['André', 'marcelo', 'josé']

console.log(clients)

let clientsJoin = clients.join(', ') //adiciona á sua array

console.log(clientsJoin)

clients.sort() //Coloca em ordem crescete
clients.reverse() //Inverte o array
console.log(clients)

const tempLondon = [18, 13, 8, -2]
//Tipo um loop, esse every olha todos os itens da array e retorna um true or false
const tempPositive = tempLondon.every(value => value >= 0)

console.log(tempPositive)
// Ele filtra e mostra os resultados
const tempPositiveFill = tempLondon.filter(value => value >= 0)

console.log(tempPositiveFill)












