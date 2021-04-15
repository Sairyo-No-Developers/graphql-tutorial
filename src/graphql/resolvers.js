import { books, authors, publishers, chuckNorrisJokes } from '../dataLoader';
import Book from '../models/Book';

const resolvers = {
    Query: {
        allBooks: () => Object.values(books),
        allAuthors: () => Object.values(authors),
        allPublishers: () => Object.values(publishers),
        bookById: (_, { id }) => books[id],
        authorById: (_, { id }) => authors[id],
        publisherById: (_, { id }) => publishers[id],
        getRandomChuckNorrisJoke: () => {
            return chuckNorrisJokes[Math.floor(Math.random() * chuckNorrisJokes.length)];
        }
    },
    Mutation: {
        addBook: (_, { bookInput }) => {
            const { bookName, bookAuthors, bookPublisher } = bookInput;

            if (Object.values(books).find(e => e.bookName === bookName)) return new Error("Book with this name already exixts.")

            const currentBookId = Object.keys(books).length + 1;

            const authorsExist = bookAuthors.reduce((res, e) => res && Object.keys(authors).includes(e), true);
            if (!authorsExist) return new Error("Invalid author ID/IDs.")

            const publisherExists = Object.keys(publishers).includes(bookPublisher);
            if (!publisherExists) return new Error("Invalid publisher ID.")

            const newBook = new Book(currentBookId, bookName, bookAuthors, bookPublisher);
            console.log(newBook);

            books[currentBookId] = newBook;
            publishers[bookPublisher].addBook(newBook.id);
            bookAuthors.map(e => authors[e].addBook(newBook.id));

            return newBook;
        },
        deleteBook: (_, { id }) => {
            const deletedBook = books[id];
            delete books[id];
            Object.values(authors).forEach(e => {
                e.removeBook(id);
            });
            Object.values(publishers).forEach(e => {
                e.removeBook(id);
            })
            return deletedBook;
        }
    },
    Book: {
        authors: (parent) => {
            console.log(parent);
            const { _id: id } = parent;
            return Object.values(authors).filter(author => author.hasWritten(id));
        },
        publisher: ({ _id: id }) => Object.values(publishers).find(publisher => publisher.hasPublished(id)),
    },
    Author: {
        books: ({ _id: id }) => Object.values(books).filter(book => book.writtenBy(id)),
    },
    Publisher: {
        books: ({ _id: id }) => Object.values(books).filter(book => book.publishedBy(id)),
    }
};

export { resolvers };