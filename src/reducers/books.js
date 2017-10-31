const books = (state = [], action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return [
                ...state,
                {
                    id: action.id,
                    book: action.book,
                    status: 1
                }
            ]
        case 'CHANGE_STATUS':
            return state.map(book => {
                if (book.id === action.id) {
                    book.status = action.status;
                }

                return book;
            });
        default:
            return state
    }
}

export default books