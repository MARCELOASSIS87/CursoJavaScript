// Factory

// function createBook(title, author, pages) {
//     const book = {
//         bookTitle: title,
//         bookAuthor: author,
//         bookPages: pages,
//         printBook: function () {
//             for (let i = 0; i <= book.bookPages; i++) {
//                 console.log('printing page ', i)
//             }
//         }
//     }

//     return book
// }

// const book1 = createBook('atomic habbit', 'james', 306)
// const book2 = createBook('Zé biloca', 'José Bill', 100)

// book1.color = 'green'
// console.log(book1)
// console.log(book2)
// book.printBook() 

// function printBook(bookPages) {
//     for (let i = 0; i <= bookPages; i++){
//         console.log('printing page ', i)
//     }        
// }
// printBook(book.bookPages)
// console.log(book)  

// Constructor
function CreateBook(title, author, pages) {

    this.bookTitle = title;
    this.bookAuthor = author;
    this.bookPages = pages

}

const book1 = new CreateBook('atomic habbit', 'james', 306)

console.log(book1)
