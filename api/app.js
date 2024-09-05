import cors from 'cors';
import express from 'express';
import { router } from './router/index.js';
import path from 'path';

const app = express();

app.use(
    cors({
        origin: ['http://localhost:3005', 'http://localhost:3000'],
    }),
);

app.use(express.json());

const port = process.env.PORT || 3000;

app.use(router);

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '../client')))

// AFTER defining routes: Anything that doesn't match what's above, send back index.html; (the beginning slash ('/') in the string is important!)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/index.html'))
})

// Route to test if the server is running
// app.get('/', (req, res) => {
//     return res.send({ message: "Bienvenue sur Techno'vice API" });
// });

app.listen(port, error => {
    if (!error) {
        console.log('Server is Successfully Running, and App is listening on port ' + port);
    } else {
        console.log("Error occurred, server can't start", error);
    }
});
