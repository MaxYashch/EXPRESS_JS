import express from 'express';
import { userRouter } from './users/users.js';

const port = 8000;
const app = express();

app.get('/hello', (req, res) => {
    res.send('HI MAN');
});

app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`Server has been running on http://localhost:${port}`);
});