import { createStore, combineReducers } from 'redux'
import route from './modules/route'
import language from './modules/language'

export default function configureStore () {
    
    const appReducer = combineReducers({
        route,
        language
    })

    return createStore(appReducer);
}