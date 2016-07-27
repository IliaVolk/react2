import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './src/react/App'
import {IndexRoute, Route, Router, browserHistory} from 'react-router';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import UserList from "./src/react/userList/UserList"
import reducer from './src/react/userList/reducer'

const store = createStore(
  reducer
)
render(
    (<Provider store={store}>
        <App/>
    </Provider>)
    , document.getElementById('root')
)
