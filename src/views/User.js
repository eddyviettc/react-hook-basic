import { useState, useEffect } from "react"
import useFetch from "../customize/fetch"
const User = () => {
    const { data: users, isLoading, isError } = useFetch('https://reqres.in/api/users?page=1')
    return (
        <div style={{ background: '#282c34', color: 'white' }}>
            <h3>User Table</h3>

            <table id="customers">
                <thead>
                    <th>Id</th>
                    <th>Email</th>
                    <th>First name</th>
                    <th>Last name</th>
                </thead>
                <tbody>
                    {isError === false && isLoading === false && users.data && users.data.length > 0 &&
                        users.data.map(item => {
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
                            <td colSpan='5' style={{ 'textAlign': 'center' }}>Loading...</td>
                        </tr>}

                    {isError === true

                        && <tr >
                            <td colSpan='5' style={{ 'textAlign': 'center' }}>Something Wrong...</td>
                        </tr>}


                </tbody>
            </table>
        </div>
    )
}
export default User