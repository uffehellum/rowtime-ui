import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction, logoutAction } from '../actions'

export default function LoginProfile() {
    const login = useSelector(state => state.login)
    return login.isLoggedIn ? (
        <Profile login={login} />
    ) : (
            <Login />
        )
}

const Login = () => {
    const dispatch = useDispatch()
    const [state, setState] = useState({
        email: "",
        password: ""
    })
    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }
    const login = () => dispatch(loginAction(state))
    return (
        <>
            <h1>Login</h1>
            <div className="form">
                <input type="email"
                    id="email"
                    required
                    value={state.email}
                    onChange={handleChange}
                />
                <label htmlFor="email" className="label-name">
                    <span className="content-name">User name (email)</span>
                </label>
            </div>
            <div className="form">
                <input type="password"
                    id="password"
                    required
                    value={state.password}
                    onChange={handleChange}
                />
                <label htmlFor="password" className="label-password">
                    <span className="content-password">Password</span>
                </label>
            </div>
            <div className="form">
                <button type="submit" onClick={login} >Login</button>
            </div>
        </>
    )
}

const Profile = ({ login }) => {
    const dispatch = useDispatch()
    const logout = () => dispatch(logoutAction())
    return (
        <div>
            <h1>Profile</h1>
            <div>Email</div>
            <div>{login.name}</div>
            <button onClick={logout} >Logout</button>
        </div>
    )
}
