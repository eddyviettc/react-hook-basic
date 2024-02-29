import { useState, useEffect } from "react"
import axios from 'axios'

const User = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)



    useEffect(async () => {
        try {
            let res = await axios.get('https://reqres.in/api/users?page=1')
            let data = res && res.data ? res.data.data : []
            setUsers(data)
            setIsLoading(false)
            setIsError(false)
        } catch (e) {
            setIsError(true)
            setIsLoading(false)
            console.log(e)
        }

    }, [])

    return (
        <table id="customers">
            <thead>
                <th>Id</th>
                <th>Email</th>
                <th>First name</th>
                <th>Last name</th>
            </thead>
            <tbody>
                {isError === false && isLoading === false && users && users.length > 0 &&
                    users.map(item => {
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.email}</td>
                                <td>{item.first_name}</td>
                                <td>{item.last_name}</td>
                            </tr>
                        )
                    })}

                {isLoading === true

                    && <tr >
                        <td colspan='5' style={{ 'textAlign': 'center' }}>Loading...</td>
                    </tr>}

                {isError === true

                    && <tr >
                        <td colspan='5' style={{ 'textAlign': 'center' }}>Something Wrong...</td>
                    </tr>}


            </tbody>
        </table>
    )
}
export default User