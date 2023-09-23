// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const tasks = [];

app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
    const task = req.body.task;
    tasks.push(task);
    res.sendStatus(201);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
