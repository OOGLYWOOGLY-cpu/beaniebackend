const express = require('express');
const app = express();
const PORT = 3000;

app.get('/status', (req, res) => {
    res.json({ status: 'ok' });
});

app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:$3000`);
});