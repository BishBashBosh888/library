const myLibrary = [
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        isbn: "9780061120084",
        genre: "Fiction",
        publishedYear: 1960
    },
    {
        title: "1984",
        author: "George Orwell",
        isbn: "9780451524935",
        genre: "Dystopian",
        publishedYear: 1949
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        isbn: "9780743273565",
        genre: "Fiction",
        publishedYear: 1925
    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        isbn: "9780316769488",
        genre: "Fiction",
        publishedYear: 1951
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        isbn: "9781503290563",
        genre: "Romance",
        publishedYear: 1813
    }
];

function Book(title,author,isbn,genre,publishedYear) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.genre = genre;
    this.publishedYear = publishedYear;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function displayBooks(){
    const libraryTable = document.getElementById('library-table');
    myLibrary.forEach(book => {
        const bookData = document.createElement('tr');

        bookData.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td>${book.genre}</td>
        <td>${book.publishedYear}</td>
        `;

        libraryTable.appendChild(bookData);
    });
}

displayBooks();