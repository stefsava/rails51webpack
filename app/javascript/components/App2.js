import React from "react"
import Footer from "./Footer"
import AddTodo from "../containers/AddTodo"
import VisibleTodoList from "../containers/VisibleTodoList"

const App2 = () => (
  <div>
    <h1>Due</h1>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App2
