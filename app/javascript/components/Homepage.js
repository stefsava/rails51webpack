import React from "react"
import { Link } from "react-router"

const Homepage = () => (
  <div>
    <h1>Home page</h1>
    <Link to="/users">Users</Link>
  </div>
)

export default Homepage
