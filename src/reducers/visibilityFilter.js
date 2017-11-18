 const filters = [
    {val:'Show All', id:0},
    {val: 'Not started', id:1},
    {val :'In progress', id:2},
    {val: 'Finished', id:3}]

const visibilityFilter = (state={}, action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return {filters, search:state.search || '', active:filters.find(f=> f.id === action.filter)}
        case 'SET_SEARCH_QUERY':
            return {filters, search:action.search, active: state.active || filters[0]}
        default:
            return {filters, search:state.search || '', active: state.active || filters[0]}
    }
}

export default visibilityFilter