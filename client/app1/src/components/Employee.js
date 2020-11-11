import React, { useEffect, useState } from 'react'

function Employee({ match }) {
    useEffect(() => {
        fetchItem()
    }, [])
    const [item, setItem] = useState({})
    const url = 'http://dummy.restapiexample.com/api/v1/employee'
    const fetchItem = async () => {
        console.log(match.params)
        const data = await fetch(`${url}/${match.params.id}`)
        const v = await data.json()
        console.log(v)
        setItem(v.data)
    }

    return (
        <div>
            <h1>{item.employee_name}</h1>
            <div>Age {item.employee_age}</div>
            <div>Salary {item.employee_salary}</div>
            <img src={item.profile_image} alt={item.employee_name} />
        </div>
    )
}

export default Employee
