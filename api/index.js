import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(express());
app.use(cors());
app.use(cookieParser())


app.get('/', (req, res) => {
    res.status(200).send('welcome to my portfolio')
})


app.get('/api/login', (req, res) => {
    res.cookie('test_cookie', '1234amitomar43232').json('Hello from login');
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Connected')
})