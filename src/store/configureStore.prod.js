import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers/root'
import { composeWithDevTools } from 'redux-devtools-extension'

const enhancer = composeWithDevTools(
    // applyMiddleware(thunkMiddleware),
)

export default function configureStore(initialState) {
    return createStore(reducer, initialState, enhancer)
}
