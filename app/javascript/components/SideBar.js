import React from "react"
import { Link } from "react-router"

const Sidebar = () => (
  <aside className="primary-aside">
    <ul>
      <li><Link to="/">App</Link></li>
      <li><Link to="/users">Users</Link></li>
      <li><Link to="/todos">Todos</Link></li>
      <li><Link to="/lock">Lock</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/signup">Signup</Link></li>
    </ul>
  </aside>
)

export default Sidebar
