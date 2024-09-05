import cors from 'cors';
import express from 'express';
import path from 'path';
import { router } from './router/index.js';

const app = express();

app.use(
    cors({
        origin: ['http://localhost:3005', 'http://localhost:3000'],
    }),
);

app.use(express.json());

const port = process.env.PORT || 3000;

app.use(router);

// Servir les fichiers statiques du dossier 'client'
app.use(express.static(path.join(__dirname, '../client')));

// Route pour servir index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(port, error => {
    if (!error) {
        console.log('Server is Successfully Running, and App is listening on port ' + port);
    } else {
        console.log("Error occurred, server can't start", error);
    }
});
