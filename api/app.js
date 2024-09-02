import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, error => {
    if (!error) {
        console.log('Server is Successfully Running, and App is listening on port ' + port);
    } else {
        console.log("Error occurred, server can't start", error);
    }
});
