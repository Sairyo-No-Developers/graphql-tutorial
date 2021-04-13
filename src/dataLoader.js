import Book from './models/Book';
import Author from './models/Author';
import Publisher from './models/Publisher';

const publishers = {
    1: new Publisher(1, "Pearson", []),
    2: new Publisher(2, "Riley", [])
}

const books = {
    1: new Book(1, "Learn ECMA The Easy Way", [], 1),
    2: new Book(2, "Asynchronous Programming for Babies", [], 2),
    3: new Book(3, "ECMA: Best Practices", [], 1),
    4: new Book(4, "GraphQL: What the heck is it?", [], 2)
}

const authors = {
    1: new Author(1, "Cheems", []),
    2: new Author(2, "Doge", []),
    3: new Author(3, "Kermit", []),
    4: new Author(4, "Big Floppa", [])
}

publishers[1].addBook(1);
publishers[1].addBook(3);
publishers[2].addBook(2);
publishers[2].addBook(4);

authors[1].addBook(1); books[1].addAuthor(1);
authors[2].addBook(1); books[1].addAuthor(2);
authors[2].addBook(2); books[2].addAuthor(2);
authors[3].addBook(4); books[4].addAuthor(3);
authors[3].addBook(1); books[1].addAuthor(3);
authors[4].addBook(4); books[4].addAuthor(4);
authors[4].addBook(3); books[3].addAuthor(4);

export { books, authors, publishers };