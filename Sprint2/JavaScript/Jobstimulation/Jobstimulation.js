// jobstimulation.js
let bookCatalog = JSON.parse(localStorage.getItem('bookCatalog')) || [];

document.addEventListener("DOMContentLoaded", function () {
    displayBooks();
    loadRandomQuote();
});

function displayBooks() {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = '';

    bookCatalog.forEach((book, index) => {
        const bookItem = document.createElement("div");
        bookItem.classList.add("book-item");

        bookItem.innerHTML = `
            <img src="${book.cover || 'default-cover.jpg'}" alt="Book Cover">
            <div>
                <strong contenteditable="true" onblur="updateBook(${index}, 'title', this.textContent)">${book.title}</strong>
                <p contenteditable="true" onblur="updateBook(${index}, 'author', this.textContent)">${book.author}</p>
            </div>
            <button onclick="deleteBook(${index})">❌</button>
        `;

        bookList.appendChild(bookItem);
    });

    localStorage.setItem('bookCatalog', JSON.stringify(bookCatalog));
}

function addBook() {
    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const cover = document.getElementById("cover").value.trim();

    if (title && author) {
        bookCatalog.push({ title, author, cover });
        displayBooks();
        document.getElementById("title").value = '';
        document.getElementById("author").value = '';
        document.getElementById("cover").value = '';
    } else {
        alert("Please fill in both title and author fields.");
    }
}

function deleteBook(index) {
    bookCatalog.splice(index, 1);
    displayBooks();
}

function updateBook(index, field, value) {
    bookCatalog[index][field] = value;
    localStorage.setItem('bookCatalog', JSON.stringify(bookCatalog));
}

function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
        const fileContent = event.target.result;
        const books = fileContent.split('\n').map(line => {
            const [title, author, cover] = line.split(',');
            return { title: title.trim(), author: author.trim(), cover: cover ? cover.trim() : '' };
        });

        bookCatalog.push(...books);
        displayBooks();
    };

    if (file) reader.readAsText(file);
}

function searchBooks() {
    const query = document.getElementById("search").value.toLowerCase();
    document.querySelectorAll(".book-item").forEach(book => {
        const title = book.querySelector("strong").textContent.toLowerCase();
        const author = book.querySelector("p").textContent.toLowerCase();
        book.style.display = (title.includes(query) || author.includes(query)) ? "flex" : "none";
    });
}

function loadRandomQuote() {
    const quotes = [
        "“A reader lives a thousand lives before he dies.” – George R.R. Martin",
        "“So many books, so little time.” – Frank Zappa",
        "“Books are uniquely portable magic.” – Stephen King",
        "“I have always imagined that Paradise will be a kind of library.” – Jorge Luis Borges",
        "“That’s the thing about books. They let you travel without moving your feet.” – Jhumpa Lahiri"
    ];
    document.getElementById("quote").textContent = quotes[Math.floor(Math.random() * quotes.length)];
}
