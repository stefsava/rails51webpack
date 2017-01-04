import React from "react"
import FilterLink from "../containers/FilterLink"
import { Link, IndexLink } from "react-router"
import { LinkContainer } from "react-router-bootstrap"
import { Button, ButtonToolbar, ButtonGroup, Glyphicon } from "react-bootstrap"

const Footer = () => (
  <div>
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
    <IndexLink to="/">Uno</IndexLink>
    <IndexLink to="/pippo">Due</IndexLink>

    <ButtonToolbar>
      <LinkContainer to={{ pathname: "/", query: { bar: "baz" } }}>
        <Button>Uno</Button>
      </LinkContainer>

      <LinkContainer to={{ pathname: "/pippo", query: { bar: "baz" } }}>
        <Button>Due</Button>
      </LinkContainer>
    </ButtonToolbar>

    <ButtonToolbar>
      <ButtonGroup>
        <Button><Glyphicon glyph="align-left" /></Button>
        <Button><Glyphicon glyph="align-center" /></Button>
        <Button><Glyphicon glyph="align-right" /></Button>
        <Button><Glyphicon glyph="align-justify" /></Button>
      </ButtonGroup>
    </ButtonToolbar>
    <ButtonToolbar>
      <ButtonGroup>
        <Button bsSize="large"><Glyphicon glyph="star" /> Star</Button>
        <Button><Glyphicon glyph="star" /> Star</Button>
        <Button bsSize="small"><Glyphicon glyph="star" /> Star</Button>
        <Button bsSize="xsmall"><Glyphicon glyph="star" /> Star</Button>
      </ButtonGroup>
    </ButtonToolbar>



  </div>
)

export default Footer
