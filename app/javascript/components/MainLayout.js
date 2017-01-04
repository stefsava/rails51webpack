import React from "react"
import { Link, IndexLink } from "react-router"
import { Button, ButtonToolbar, ButtonGroup, Glyphicon } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

const MainLayout = ({ children }) => (
  <div className="app container">
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
    <aside className="primary-aside">
      <ul>
        <li><Link to="/">App</Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul>
    </aside>
    <main>
      { children }
    </main>
  </div>
  )

export default MainLayout
