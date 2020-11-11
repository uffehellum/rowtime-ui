import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { incrementAction, decrementAction } from '../actions'

const StartHeadrace = () => {
    const counter = useSelector(state => state.counter)
    const login = useSelector(state => state.login)
    const dispatch = useDispatch()
    console.log(login)
    // const increment = () => dispatch(incrementAction())
    // const decrement = () => dispatch(decrementAction())
    return (
        <div>
            <h1>Start Headrace</h1>
            <p>Launch each boat from chute</p>
            <p>Counter is {counter}</p>
            <button onClick={() => dispatch(incrementAction())}>+</button>
            {
                login.isLoggedIn 
                && <button onClick={() => dispatch(decrementAction())}>-</button>
                
            }
        </div>
    )
}

export default StartHeadrace
