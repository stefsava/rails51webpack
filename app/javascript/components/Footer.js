import React from "react"
import FilterLink from "../containers/FilterLink"
import { Link } from "react-router"
import { LinkContainer } from "react-router-bootstrap"
import { Button } from "react-bootstrap"

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

    <br />
    <LinkContainer to={{ pathname: "/", query: { bar: "baz" } }}>
      <Button>Uno</Button>
    </LinkContainer>

    <LinkContainer to={{ pathname: "/pippo", query: { bar: "baz" } }}>
      <Button>Due</Button>
    </LinkContainer>
  </p>
)

export default Footer
