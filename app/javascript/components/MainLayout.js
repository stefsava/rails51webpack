import React from "react"
import Header from "./Header"
import SideBar from "./SideBar"

const MainLayout = ({ children }) => (
  <div className="app">
    <Header />
    <SideBar />
    <main>
      { children }
    </main>
  </div>
  )

export default MainLayout
