export default function loginReducer(state = logoutState, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                isLoggedIn: true,
                name: action.name
            }
        case 'LOGOUT':
            return logoutState
        default: return state
    }
}

const logoutState = {
    isLoggedIn: false,
    name: null
}