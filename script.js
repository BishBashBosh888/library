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

function removeBook(index){
    myLibrary.splice(index, 1);
    displayBooks();
}

function displayBooks(){
    const libraryTable = document.getElementById('library-table');

    libraryTable.innerHTML = `
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Genre</th>
            <th>Published Year</th>
        </tr>
    `

    myLibrary.forEach((book,index) => {
        const bookData = document.createElement('tr');

        bookData.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td>${book.genre}</td>
        <td>${book.publishedYear}</td>
        <button onclick="removeBook(${index})">Remove</button>
        `;

        libraryTable.appendChild(bookData);
    });
}

displayBooks();

const addBookButton = document.getElementById('add-book');
const bookModal = document.getElementById('book-modal');
const modalOverlay = document.getElementById('modal-overlay');
const closeModalButton = document.getElementById('close-modal');
const bookForm = document.getElementById('book-form');

addBookButton.addEventListener('click', () => {
    bookModal.classList.add('show');
    modalOverlay.classList.add('show');
});

closeModalButton.addEventListener('click', () => {
    bookModal.classList.remove('show');
    modalOverlay.classList.remove('show');
});

bookForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;
    const genre = document.getElementById('genre').value;
    const publishedYear = document.getElementById('publishedYear').value;

    const newBook = new Book(title, author, isbn, genre, publishedYear);
    addBookToLibrary(newBook);

    displayBooks();

    bookForm.reset();
    bookModal.classList.remove('show');
    modalOverlay.classList.remove('show');
})