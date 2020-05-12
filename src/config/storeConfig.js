import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router/immutable'
import rootReducer from '../reducers'

export const history = createBrowserHistory()

function storeConfig(preloadedState) {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const middleware = [thunk, routerMiddleware(history)]

  const store = createStore(
    rootReducer(history),
    preloadedState,
    composeEnhancer(applyMiddleware(...middleware)),
  )

  // // Hot reloading
  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('../reducers', () => {
  //     store.replaceReducer(rootReducer(history))
  //   })
  // }

  return store
}

export default storeConfig
