import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Nav = () => (
    <nav>
        <ul className="nav-links">
            <li>Row time</li>
            <Link to="/about">
                <li>About</li>
            </Link>
            <Link to="/startheadrace">
                <li>Start Headrace</li>
            </Link>
            <Link to="/finishrace">
                <li>Finish Race</li>
            </Link>
            <LoginLogoutLink />
        </ul>
    </nav>
)

function LoginLogoutLink() {
    const login = useSelector(state => state.login)
    return login.isLoggedIn ? (
        <Link to="/profile">
            <li>{login.name}</li>
        </Link>
    ) : (
        <Link to="/login">
            <li>Login</li>
        </Link>
    )

}
export default Nav
