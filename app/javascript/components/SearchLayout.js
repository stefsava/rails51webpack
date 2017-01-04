import React from "react"

const SearchLayout = ({ children }) => (
  <div className="search">
    <header className="search-header"></header>
    <div className="results">
      {children}
    </div>
    <div className="search-footer pagination"></div>
  </div>
  )

export default SearchLayout
