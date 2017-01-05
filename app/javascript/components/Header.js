import React from "react"
import { Button, ButtonToolbar } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

const Header = () => (
  <header className="primary-header">
    <ButtonToolbar>
      <LinkContainer to={{ pathname: "/", query: { bar: "baz" } }}>
        <Button>App</Button>
      </LinkContainer>

      <LinkContainer to={{ pathname: "/users", query: { bar: "baz" } }}>
        <Button>Users</Button>
      </LinkContainer>
    </ButtonToolbar>
  </header>
)

export default Header
