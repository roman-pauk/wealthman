import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import reducer from '@reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import sagaMiddleware from '@store/sagaMiddleware'

const loggerMiddleware = createLogger({
    level: 'info',
    collapsed: true,
})

const enhancer = composeWithDevTools(
    applyMiddleware(sagaMiddleware, loggerMiddleware),
)

export default function configureStore(initialState) {
    const store = createStore(reducer, initialState, enhancer)
    if (module.hot) {
        module.hot.accept('@reducers', () =>
            store.replaceReducer(require('@reducers').default),
        )
    }
    return store
}
