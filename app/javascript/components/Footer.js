import React from "react"
import FilterLink from "../containers/FilterLink"
import { Link } from "react-router"

const Footer = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {", "}
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
    <br />
    <Link to="/">Uno</Link>
    <Link to="/pippo">Due</Link>
  </p>
)

export default Footer
