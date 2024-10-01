import React from 'react'
import { Link } from 'react-router-dom'

const Navbar:React.FC = () => {
  return (
    <nav style={{display: "flex", width: "400px", justifyContent: "space-evenly", marginBottom: "20px"}}>
        <Link to={'/cocktails'}>Cocktails</Link>
        <Link to={'/randomcocktails'}>Random Cocktails</Link>
        <Link to={'/'}>Home</Link>
    </nav>
  )
}

export default Navbar