import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function FinishRace() {
    useEffect(() => {
        fetchItems()
    }, [])

    const [items, setItems] = useState([])
    const url = 'http://dummy.restapiexample.com/api/v1/employees'
    // const url = 'https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get'

    const fetchItems = async () => {
        const data = await fetch(url)
        const items = await data.json()
        console.log(items)
        setItems(items.data)
    }

    return (
        <div>
            <h1>Finish Race Page</h1>
            <p>Finish each boat as they cross line</p>
            {items.map(item => (
                <div key={item.id}>
                    <Link to={`/employee/${item.id}`}>
                        {item.employee_name}
                        {item.profile_image && <img height="2em" src={item.profile_image} alt={item.employee_name} />}

                    </Link>
                </div>
            ))}
        </div>
    )
}

export default FinishRace
