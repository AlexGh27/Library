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
}

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++) {


        let bookCard = document.createElement("div");
        bookCard.className = "bookCard" 
        document.querySelector(".container").appendChild(bookCard);


        let bookTitle = document.createElement("div");
        bookTitle.className = "bookTitle"
        bookTitle.innerHTML = myLibrary[i].title 
        document.querySelector(".bookCard").appendChild(bookTitle);

        let bookAuthor = document.createElement("div");
        bookAuthor.className = "bookAuthor"
        bookAuthor.innerHTML = myLibrary[i].author
        document.querySelector(".bookCard").appendChild(bookAuthor);

        let readDiv = document.createElement("div");
        readDiv.className = "readDiv"
        document.querySelector(".bookCard").appendChild(readDiv);

        let readStatus = document.createElement("input");
        readStatus.setAttribute("type", "checkbox");
        readStatus.querySelector(".readDiv").appendChild(readStatus);

        let removeBook = document.createElement("button");
        removeBook.className = "removeBook"
        removeBook.innerHTML = "Remove"
        document.querySelector(".bookCard").appendChild(removeBook);
    }
}