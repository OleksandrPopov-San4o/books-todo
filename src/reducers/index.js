import { combineReducers } from 'redux'
import books from './books'
import visibilityFilter from './visibilityFilter'

const bookApp = combineReducers({
    books,
    visibilityFilter   
})

export default bookApp