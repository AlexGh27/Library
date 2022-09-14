let bookAdder = document.querySelector("#addBook")

bookAdder.addEventListener('click', addBookToLibrary);



let myLibrary = [];

function Book(title, author) {
    this.title = title;
    this.author = author;  
}

function addBookToLibrary() {
    let bookTitle = document.querySelector("#book_title").value;
    let bookAuthor = document.querySelector("#book_author").value;
    
    let book = new Book(bookTitle, bookAuthor);
    myLibrary.push(book);
    console.log(myLibrary);
    document.querySelector("#book_title").value = "";
    document.querySelector("#book_author").value = "";
}