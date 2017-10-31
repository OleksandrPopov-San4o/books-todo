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

export const toggleTodo = (id, status) => {
    return {
        type: 'CHANGE_STATUS',
        id,
        status
    }
}