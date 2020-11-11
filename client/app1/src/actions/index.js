
export const incrementAction = () => ({
    type: 'INCREMENT'
})
export const decrementAction = () => ({
    type: 'DECREMENT'
})
export const loginAction = state => ({
    type: 'LOGIN',
    name: state.email,
    password: state.password
})
export const logoutAction = () => ({
    type: 'LOGOUT',
})
