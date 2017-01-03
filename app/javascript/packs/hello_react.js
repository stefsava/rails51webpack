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
import App from "../components/App"
import reducer from "../reducers"

const store = createStore(reducer)
document.addEventListener("DOMContentLoaded", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  )
})
