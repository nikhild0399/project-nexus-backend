const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory user storage for simplicity
const users = require('./users.json');

app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;

    // Check if user already exists
    if (users[email]) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Add new user
    users[email] = { username, email, password };
    fs.writeFileSync(path.join(__dirname, 'users.json'), JSON.stringify(users, null, 2));
    
    res.status(200).json({ message: 'User registered successfully' });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Validate user credentials
    if (users[email] && users[email].password === password) {
        return res.status(200).json({ message: 'Login successful' });
    }

    res.status(400).json({ message: 'Invalid email or password' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
