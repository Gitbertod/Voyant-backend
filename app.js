const express = require('express');
const morgan = require('morgan');
const postRouter = require('./routes/postsRouter')
const userRouter = require('./routes/userRouter')
const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next()
})

//Routes
app.use('/posts', postRouter)
app.use('/users',userRouter)

module.exports = app