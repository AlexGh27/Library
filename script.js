const addBook = document.querySelector('#addBook')


addBook.addEventListener('click', function(e) {
    addBookToLibrary();
})

let myLibrary = [];

function Book(title, author) {
    this.title = title;
    this.author = author;  
}

function addBookToLibrary() {
    let title = document.getElementById("#book_title").value;
    let author = document.getElementById("#book_author").value;
    
    console.log(author);
}