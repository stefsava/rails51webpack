import React from "react"
import Footer from "./Footer"
import AddTodo from "../containers/AddTodo"
import VisibleTodoList from "../containers/VisibleTodoList"

const App = () => (
  <div>
    <div className="page-header">
      <h1>App</h1>
    </div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
