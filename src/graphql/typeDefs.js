import { gql } from "apollo-server";

const typeDefs = gql`
    type Book {
        id: ID!
        bookName: String!
        authors: [Author!]!
        publisher: Publisher!
    }

    type Author {
        id: ID!
        authorName: String!
        books: [Book!]
    }

    type Publisher {
        id: ID!
        publisherName: String!
        books: [Book!]
    }

    type Query {
        allBooks: [Book!]
        allAuthors: [Author!]
        allPublishers: [Publisher!]
        bookById(id: ID!): Book
        authorById(id: ID!): Author
        publisherById(id: ID!): Publisher
    }
`

export { typeDefs };