function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.sayBook = function () { return this.title + " " + this.author + " " +  this.pages + " " +  this.isRead; }
}

const book = new Book("Harry Potter", "J.K. Rowling", 500, 1);
console.log(book.sayBook());