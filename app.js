const express = require('express');
const fs = require('fs');
const { get } = require('http');
const app = express();

app.use(express.json())

app.post('/messages', async (req, res) => {
    let { message, nickname } = req.body;

    if (!message || typeof message !== 'string') {
        return res.status(400).json({ error: 'Invalid message' });
    }

    if (!nickname || typeof nickname !== 'string' || nickname.trim() === '') {
        nickname = 'Untitled';
    }

    try {
        const data = await loadMessages();
        const messages = data.messages || [];

        
        if (messages.length >= 5) {
            messages.shift();
        }

        messages.push({ nickname, message });
    }
    
})