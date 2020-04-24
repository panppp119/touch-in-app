import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'

import * as serviceWorker from './serviceWorker'
import storeConfig, { history } from './config/storeConfig'

import './styles/main.scss'

const store = storeConfig()

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App history={history} />
    </Provider>
  </AppContainer>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
