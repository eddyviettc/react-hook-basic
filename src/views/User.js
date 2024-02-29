import { useState, useEffect } from "react"
import axios from 'axios'

const User = () => {
    const [users, setUsers] = useState([])



    useEffect(async () => {
        let res = await axios.get('https://reqres.in/api/users?page=1')
        let data = res && res.data ? res.data.data : []
        setUsers(data)
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
                {users && users.length > 0 &&
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


            </tbody>
        </table>
    )
}
export default User