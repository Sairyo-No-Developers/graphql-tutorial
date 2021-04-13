
class Author {
    constructor(id, authorName, books) {
        this._id = id;
        this._authorName = authorName;
        this._books = new Set(books);
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get books() {
        return [...this._books];
    }

    get authorName() {
        return this._authorName;
    }

    set books(books) {
        this._books = new Set(books);
    }

    set authorName(name) {
        this._authorName = name;
    }

    addBook(bookId) {
        this._books.add(bookId)
    }

    removeBook(bookId) {
        this._books.delete(bookId);
    }

    hasWritten(bookId) {
        return this._books.has(bookId);
    }
}

export default Author;