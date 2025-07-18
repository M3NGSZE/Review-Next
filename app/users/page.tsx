import React from 'react'

interface User {
    id: number;
    name: string
}

const UserPage = async () => {

    // const res = await fetch("https://jsonplaceholder.typicode.com/users", {cache: 'no-store'}); use to disable caching

    const res = await fetch("https://jsonplaceholder.typicode.com/users", // keep data fresh for a certain period of time // if use third party library we will no have the cach
        { next: { revalidate : 10} });

    const users: User[] = await res.json();

    return (
        <>
            <h1>Users</h1>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </>
    )
}

export default UserPage;
