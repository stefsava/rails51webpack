import React from "react"
import { connect } from "react-redux"
import { addTodo } from "../actions"

let AddTodo = ({ dispatch }) => {
  let input

  const submit = e => {
    e.preventDefault()
    if (!input.value.trim()) {
      return
    }
    dispatch(addTodo(input.value))
    input.value = ""
  }

  return (
    <div>
      <form onSubmit={submit}>
        <div className="form-group">
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Todo..."
              ref={node => {
                input = node
              }} />
            <span className="input-group-btn">
              <button className="btn btn-primary" type="submit">Add</button>
            </span>
          </div>
        </div>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
