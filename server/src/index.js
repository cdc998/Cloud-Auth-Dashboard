const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));

app.use(express.json());

app.get('/ping', (req, res) => {
    res.json({ ok: true });
});

app.get('/sessions/count', (req, res) => {
    res.json({ count: 5 });
});

app.get('/logins/recent', (req, res) => {
    res.json({ recent: 3 });
});

const users = [
    { id: 1, email: 'alice@example.com', lastLogin: '2025-04-20T10:00:00Z', sessionCount: 2, role: 'user' },
    { id: 2, email: 'bob@example.com',   lastLogin: '2025-04-21T09:30:00Z', sessionCount: 1, role: 'admin' }
];

app.get('/users', (req, res) => {
    res.json(users);
});

app.listen(5000, () => {
    console.log('Cloud Auth Dashboard listening on port 5000')
});