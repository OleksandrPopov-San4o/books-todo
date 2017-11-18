 const filters = [
    {val:'Show All', id:0},
    {val: 'Not started', id:1},
    {val :'In progress', id:2},
    {val: 'Finished', id:3}]

const visibilityFilter = (state={}, action) => {
    console.log('filter', state)
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return {filters, active:filters.find(f=> f.id === action.filter)}
        default:
            return {filters, active: state.active || filters[0]}
    }
}

export default visibilityFilter