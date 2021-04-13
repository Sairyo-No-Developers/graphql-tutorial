import { books, authors, publishers } from '../dataLoader';

const resolvers = {
    Query: {
      allBooks: () => Object.values(books),
      allAuthors: () => Object.values(authors),
      allPublishers: () => Object.values(publishers),
      bookById: (_, { id }) => books[id],
      authorById: (_, { id }) => authors[id],
      publisherById: (_, { id }) => publishers[id],
    },
    Book: {
        authors: ({ _id: id }) => Object.values(authors).filter(author => author.hasWritten(id)),
        publisher: ({ _id: id }) => Object.values(publishers).filter(publisher => publisher.hasPublished(id))[0],
    },
    Author: {
        books: ({ _id: id }) => Object.values(books).filter(book => book.writtenBy(id)),
    },
    Publisher: {
        books: ({ _id: id }) => Object.values(books).filter(book => book.writtenBy(id)),
    }
};

export { resolvers };