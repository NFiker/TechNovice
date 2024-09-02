import express from 'express';

const app = express();

app.listen(process.env.PORT || 3000, error => {
    if (!error) {
        console.log(
            'Server is Successfully Running, and App is listening on port ' + process.env.PORT || 3000,
        );
    } else {
        console.log("Error occurred, server can't start", error);
    }
});
