import React, { useState, useEffect } from 'react';

function PingPage() {
    const [pong, setPong] = useState(null);

    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + '/ping')
            .then(res => res.json())
            .then(json => setPong(json.ok))
            .catch(err => console.error('Ping error:', err));
    }, [])

    return (
        <div>
            <h1>Ping Test</h1>
            {pong === null
                ? <p>Loading...</p>
                : <p>Server says: {pong.toString()}</p>}
        </div>
    );
}

export default PingPage;