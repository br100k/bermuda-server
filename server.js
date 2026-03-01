const express = require('express');
const app = express();
app.use(express.json());

let victims = [];

app.get('/', (req, res) => {
    res.send('🫀 Бермудский треугольник работает!');
});

app.get('/api/victims', (req, res) => {
    res.json(victims);
});

app.post('/api/data', (req, res) => {
    const data = req.body;
    data.timestamp = Date.now();
    victims.push(data);
    res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
   console.log('Сервер запущен на порту ${PORT}');
});
