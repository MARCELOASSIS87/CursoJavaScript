console.log('java script funciona');

// Aula 14
let firstname = 'Marcelo';
let lastname = 'Assis';
console.log(firstname);
console.log(lastname);

// variáveis 

let itemName = 'Pen' //String
let itemPrice = 3 //Number
let itemAvailable = true //Boolean
let itemColor = 'Red'

let itemStructure //Undefined

itemSecondName = null //apaga o conteúdo da variável

console.log(itemName, itemSecondName, itemPrice, itemAvailable, itemColor)

// javascript é dinâmico ou seja ele altera o tipo da variável conforme
// o tipo do dado de entrada mesmo que isso seja durante o código

// Objeto
let pen = {
    itemName: 'Pen',
    itemPrice: 3,
    itemAvailable: true,
    itemColor: 'Red'
}

pen.itemAvailable = false

console.log(pen)
console.log(pen.itemColor)
// Arrays
let friends = ['Marcos', 'Silvia', 'Elisa']
console.log(friends)
friends[2] = 'Junior'
console.log(friends[2])

//Funcoes
// function saleStatus(status, total) {

//     console.log('Transaction ' + status + '! To')
        
// }
// saleStatus(friends);

function percentage10(price) {
    return price - (price * 10/100)
}

console.log(percentage10(20))