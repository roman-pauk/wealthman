import { createStore, applyMiddleware } from 'redux'
import reducer from '@reducers'
import sagaMiddleware from '@store/sagaMiddleware'

export default function configureStore(initialState) {
    return createStore(reducer, initialState, applyMiddleware(sagaMiddleware))
}
