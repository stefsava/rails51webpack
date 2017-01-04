// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the
// head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render
// <div>Hello React</div> at the bottom
// of the page.

// import React from 'react'
// import ReactDOM from 'react-dom'
// import Hello from 'hello'
//
// document.addEventListener("DOMContentLoaded", e => {
//   ReactDOM.render(
//     <Hello name="React" />,
//     document.body.appendChild(document.createElement('div'))
//   )
// })

import React from "react"
import { render } from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"
// import { Router, Route, IndexRoute, browserHistory } from "react-router"
// import { syncHistoryWithStore, routerReducer } from "react-router-redux"
import { Router, Route, browserHistory } from "react-router"
import { syncHistoryWithStore } from "react-router-redux"

import App from "../components/App"
import App2 from "../components/App2"
import reducer from "../reducers"

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const history = syncHistoryWithStore(browserHistory, store)

document.addEventListener("DOMContentLoaded", () => {
  render(
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App} />
        <Route path="/pippo" component={App2} />
      </Router>
    </Provider>,
    document.getElementById("root")
  )
})
