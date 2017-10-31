const booksMocked = [{
    title: 'Atlas Shrugged ',
    author: 'Ayn Rand',
    status: 3,
    id: 1
},{
    title: 'Anthem',
    author: 'Ayn Rand',
    status: 1,
    id: 2
}, {
    title: 'American Gods',
    author: 'Neil Gaiman',
    status: 3,
    id: 3
}, {
    title: 'Coraline ',
    author: 'Neil Gaiman',
    status: 1,
    id: 4
},{
    title: 'A Hat Full of Sky',
    author: 'Terry Patchett',
    status: 2,
    id: 4
}];
// localstorage should be added 
// autoupdate with redux

class MockedBooks {
    getAllBooks () {
        return booksMocked;
    }
    getBook (id) {
        console.log(id)
        return booksMocked.find(book => book.id === parseInt(id, 10));
    }
    addBook(book) {
        booksMocked.push({
            title: book.title,
            author: book.author,
            status: 1,
            id: booksMocked.length
        })
    }
}

export default  MockedBooks;
