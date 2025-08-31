const express = require('express');
const connectDB = require('./config/dbConnection');
const cors = require('cors');
const dotenv = require('dotenv').config();

const authRouter = require('./routes/UserRoutes');

connectDB();
const app = express();

const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.use('/auth', authRouter);


app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on Port ${port}`);
});
