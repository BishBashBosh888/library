const myLibrary = [
    new Book("To Kill a Mockingbird", "Harper Lee", "9780061120084", "Fiction", 1960, false),
    new Book("1984", "George Orwell", "9780451524935", "Dystopian", 1949, false),
    new Book("The Great Gatsby", "F. Scott Fitzgerald", "9780743273565", "Fiction", 1925, false),
    new Book("The Catcher in the Rye", "J.D. Salinger", "9780316769488", "Fiction", 1951, false),
    new Book("Pride and Prejudice", "Jane Austen", "9781503290563", "Romance", 1813, false)
];

function Book(title,author,isbn,genre,publishedYear,read = false) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.genre = genre;
    this.publishedYear = publishedYear;
    this.read = read;
}

Book.prototype.toggleReadStatus = function () {
    this.read = !this.read;
};

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function removeBook(index){
    myLibrary.splice(index, 1);
    displayBooks();
}

function toggleRead(index) {
    myLibrary[index].toggleReadStatus();
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
            <th>Actions</th>
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
        <td>
            <button onclick="removeBook(${index})">Remove</button>
            <button onclick="toggleRead(${index})">
                ${book.read ? 'Mark as Unread' : 'Mark as Read'}
            </button>
        </td>
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