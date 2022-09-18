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
    displayBooks();
    bookTitle = 0;
    bookAuthor = 0;
}

function displayBooks() {
        
        let bookTitle = document.createElement("div");
        bookTitle.className = "bookTitle";
        bookTitle.innerHTML = myLibrary[myLibrary.length-1].title ;
        document.querySelector(".container").appendChild(bookTitle);

        let bookAuthor = document.createElement("div");
        bookAuthor.className = "bookAuthor";
        bookAuthor.innerHTML = myLibrary[myLibrary.length-1].author;
        document.querySelector(".container").appendChild(bookAuthor);

        let readBook = document.createElement("input");
        readBook.className = "readBook";
        readBook.type = "checkbox";
        document.querySelector(".container").appendChild(readBook);

        let removeBook = document.createElement("button");
        removeBook.className = "removeBook";
        removeBook.innerHTML = "Remove";
        document.querySelector(".container").appendChild(removeBook);

}

let removeButton = document.querySelector(".removeBook");

