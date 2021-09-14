import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
       <>
        <Header className="header">
            <div>
                <Link className="links" to='/'>Home</Link>
            </div>

            <nav className="navbar">
                <ul>
                <Link className="links" to="/login"Login></Link>
                <Link className="links" to="/signup"Sign Up></Link>
                </ul>


            </nav>
        </Header>
       </>
    )
}

export default Header
