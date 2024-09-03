import cors from 'cors';
import express from 'express';
import { router } from './router/index.js';

const app = express();

app.use(
    cors({
        origin: [
            'http://localhost:3005',
        ],
    })
);


app.use(express.json());

const port = process.env.PORT || 3000;

app.use(router);

app.listen(port, error => {
    if (!error) {
        console.log('Server is Successfully Running, and App is listening on port ' + port);
    } else {
        console.log("Error occurred, server can't start", error);
    }
});
