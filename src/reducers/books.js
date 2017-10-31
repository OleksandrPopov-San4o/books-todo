import MockedData from '../MockedData.js';


const books = (state = new MockedData().getAllBooks(), action) => {
    console.log('action', action)
    switch (action.type) {      
        case 'ADD_BOOK':
            return [
                ...state,
                {
                    id: state.length,
                    title: action.book.title,
                    author: action.book.author,
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

export const getBook = state => state.filter(book => book.id === state.id)