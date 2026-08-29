document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById("add-btn");
    const toggleReadButton = document.getElementById("read-status-btn");
    const form = document.getElementById("form");
    const removeButton = document.getElementById("remove-btn");
    

    const myLibrary = [];

    function Book(title, author, pages, isRead) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }

    function addBookToLibrary() {
        let nameInput = document.getElementById("name-input").value
        let authorInput = document.getElementById("author-input").value
        let pagesInput = document.getElementById("pages-input").value
        let isReadInput = document.getElementById("isRead-input").value
        let newBook = createBook(nameInput, authorInput, pagesInput, isReadInput);
        console.log("library container");
        displayLibrary();
    }

    function removeBookFromLibrary(bookId) {
        myLibrary.pop();
        displayLibrary();
    }

    function displayLibrary() {
        let libraryCont = document.getElementById("library-cont");
        libraryCont.innerHTML = " ";

        for (let i = 0; i < myLibrary.length; i++) {
            const book = myLibrary[i];
            const bookCard = document.createElement("div");
            bookCard.classList.add("book-card");
            bookCard.dataset.id = book.id;
            bookCard.innerHTML = `${book.title} ${book.author} ${book.pages} ${book.isRead}`;
            libraryCont.appendChild(bookCard);
            console.log("card added");
            const deleteBook = document.createElement("button");
            deleteBook.classList.add("delete-book");
            deleteBook.innerHTML = "x";
            libraryCont.appendChild(deleteBook);
        }
        console.log(myLibrary);
    } 

    function createBook(name, author, pages, isRead) {
        const newBook = new Book(name, author, pages, isRead);
        console.log(newBook);
        myLibrary.push(newBook);
        console.log("Book has been added to library.");
    }

    addButton.addEventListener("click", function() {
        let input_container = document.querySelector(".input-container");
        if (input_container.style.visibility == 'hidden') {
            input_container.style.visibility = 'visible';
        } else {
            input_container.style.visibility = 'hidden';
        }
    });

    toggleReadButton.addEventListener("click", function() {
        
    });

    removeButton.addEventListener("click", function() {
        let bookId = document.querySelector("book-card").value;
        bookId = bookId.dataset.id

        for (let i = 0; i < myLibrary.length; i++) {
            let book = myLibrary[i].id;

            if (book == bookId) {
                removeBookFromLibrary(myLibrary[i]);
            }
        }
    });

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        addBookToLibrary();
        form.reset();
    });
});
