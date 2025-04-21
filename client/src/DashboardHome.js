import React, { useState, useEffect } from 'react';
import './DashboardHome.css';

function DashboardHome() {
    const [count, setCount] = useState(null);
    const [recent, setRecent] = useState(null);
    
    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/sessions/count`)
            .then(res => res.json())
            .then(json => setCount(json.count))
            .catch(err => console.error('Count error:', err));
        
        fetch(`${process.env.REACT_APP_API_URL}/logins/recent`)
            .then(res => res.json())
            .then(json => setRecent(json.recent))
            .catch(err => console.error('Recent logins error:', err));
    }, []);

    return (
        <div className='dashboard-container'>
            <div className='card'>
                <h2>Active Sessions</h2>
                <p>{count === null ? 'Loading...' : count}</p>
            </div>
            <div className='card'>
                <h2>Recent Logins</h2>
                <p>{recent === null ? 'Loading...' : recent}</p>
            </div>
        </div>
    );
}

export default DashboardHome;
