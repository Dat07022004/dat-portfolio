// API disabled - returns 404 to mimic absence of endpoint
export default function handler(req, res) {
    res.status(404).json({ error: 'Not Found' });
}
