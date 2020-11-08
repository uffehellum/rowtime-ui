import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
    <nav>
        <ul className="nav-links">
            <Link to="/about">
                <li>About</li>
            </Link>
            <Link to="/startheadrace">
                <li>Start Headrace</li>
            </Link>
            <Link to="/finishrace">
                <li>Finish Race</li>
            </Link>
        </ul>
    </nav>
)

export default Nav
