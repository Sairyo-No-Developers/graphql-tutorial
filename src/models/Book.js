
class Book {
    constructor(id, bookName, authors, publisher) {
        this._id = id;
        this._bookName = bookName;
        this._authors = new Set(authors);
        this._publisher = publisher;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get bookName() {
        return this._bookName;
    }

    get authors() {
        return [...this._authors];
    }

    get publisher() {
        return this._publisher;
    }

    set bookName(bookName) {
        this._bookName = bookName;
    }

    set authors(authors) {
        this._authors = new Set([...authors]);
    }

    set publisher(publisher) {
        this._publisher = publisher;
    }

    addAuthor(authorId) {
        this._authors.add(authorId)
    }

    removeAuthor(authorId) {
        this._authors.delete(authorId);
    }

    writtenBy(authorId) {
        return this._authors.has(authorId);
    }

    publishedBy(publisherId) {
        return this._publisher === publisherId;
    }
}

export default Book;