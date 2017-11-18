let nextTodoId = 0
export const addBook = book => {
    return {
        type: 'ADD_BOOK',
        id: null,
        book
    }
}

export const setVisibilityFilter = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const setSearchQuery = str => ({ 
    type: 'SET_SEARCH_QUERY',
    search: str
})

export const changeBookStatus = (id, status) => {
    return {
        type: 'CHANGE_STATUS',
        id,
        status
    }
}