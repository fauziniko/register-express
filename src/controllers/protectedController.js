const getProfile = (req, res) => {
    res.json({ message: `Welcome, ${req.user.username}` });
};

module.exports = { getProfile };
