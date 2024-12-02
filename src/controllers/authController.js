let users = []; // Temporary storage for users
const jwt = require('jsonwebtoken');

// Register user
const registerUser = (req, res) => {
    const { username, password } = req.body;

    // Check if username already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).json({ message: 'Username already exists' });
    }

    // Add user to the temporary storage
    users.push({ username, password });
    res.status(201).json({ message: 'User registered successfully' });
};

// Login user
const loginUser = (req, res) => {
    const { username, password } = req.body;

    // Validate user credentials
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Generate JWT token
    const token = jwt.sign({ username }, process.env.SECRET_KEY, { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
};

module.exports = { registerUser, loginUser };
