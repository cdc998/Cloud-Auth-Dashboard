import React, { useState, useEffect } from 'react';
import './UserTable.css';

function UserTable() {
    const [users, setUsers] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
            fetch(`${process.env.REACT_APP_API_URL}/users`)
                .then(res => {
                    if (!res.ok) throw new Error(`Status ${res.status}`);
                    return res.json();
                })
                .then(json => setUsers(json))
                .then(err => {
                    console.error('User fetche error:', err);
                    setError(err);
                });
        }, []);

        if (error) return <p>Error loading users.</p>;
        if (users === null) return <p>Loading users...</p>;

        return (
            <table className='user-table'>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Last Login</th>
                        <th>Sessions</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={users.id}>
                            <td>{user.email}</td>
                            <td>{new Date(user.lastLogin).toLocaleDateString()}</td>
                            <td>{user.sessionCount}</td>
                            <td>{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
}

export default UserTable;