import React from "react"
import { render } from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { Router, Route, browserHistory } from "react-router"
import { syncHistoryWithStore } from "react-router-redux"

import Homepage from "../components/Homepage"

import Lock from "../components/Lock"
import Login from "../components/Login"
import Signup from "../components/Signup"

import MainLayout from "../components/MainLayout"
import SearchLayout from "../components/SearchLayout"

import Dashboard from "../components/Dashboard"
import TodoApp from "../components/TodoApp"
import UserList from "../components/UserList"

import reducer from "../reducers"

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const history = syncHistoryWithStore(browserHistory, store)

document.addEventListener("DOMContentLoaded", () => {
  render(
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>,
    document.getElementById("root")
  )
})

const routes = (
  <Route>
    <Route path="/" component={ Homepage } />
    <Route path="lock" component={ Lock } />
    <Route path="login" component={ Login } />
    <Route path="signup" component={ Signup } />
    <Route component={ MainLayout }>
      <Route component={ SearchLayout }>
        <Route path="/dashboard" component={ Dashboard } />
        <Route path="/todos" component={ TodoApp } />
        <Route path="/users" component={ UserList } />
      </Route>
    </Route>
  </Route>
);