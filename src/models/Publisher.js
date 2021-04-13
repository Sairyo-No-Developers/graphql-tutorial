
class Publisher {
    constructor(id, publisherName, books) {
        this._id = id;
        this._publisherName = publisherName;
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

    get publisherName() {
        return this._publisherName;
    }

    set books(books) {
        this._books = new Set(books);
    }

    set publisherName(name) {
        this._publisherName = name;
    }

    addBook(bookId) {
        this._books.add(bookId)
    }

    removeBook(bookId) {
        this._books.delete(bookId);
    }

    hasPublished(bookId) {
        return this._books.has(bookId);
    }
}

export default Publisher;