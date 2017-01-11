import React from "react"
import { Link } from "react-router"

const divStyle = {
  position: "fixed",
  backgroundImage: "url(waterfall-1049079_1920.jpg)",
  top: 0,
  left: 0,
  /* Preserve aspet ratio */
  minWidth: "100%",
  minHeight: "100%"
}

const h1Style = {
  textColor: 'white',
  textAlign: 'center'
}
const Homepage = () => (
  <div style={divStyle} >
    <h1 style={h1Style} >Home page</h1>
    <Link to="/login">Login</Link>
  </div>
)

export default Homepage
