import React from 'react'

const Header = ({ title }) => {
// this takes the props object and extracts the title property from it
// props are the props in Header in App.js
  return (
    <header>
        <h1>{title}</h1>
    </header>


  )
}

// This is default props in case no props are passed in App.js
Header.defaultProps = {
  title: 'Default title'
}

export default Header