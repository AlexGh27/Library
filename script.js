let bookAdder = document.querySelector("#addBook")

bookAdder.addEventListener('click', addBookToLibrary);



let myLibrary = [{title: 'asd', author: 'dsa'}];

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
        console.log(myLibrary[i].title);
        let article = document.createElement("div");
        article.className = "article"
        article.style.width = "1000px";
        article.style.height = "100px";
        
        article.innerHTML = myLibrary[i].title
        document.querySelector(".container").appendChild(article);
    }
}