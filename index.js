const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const authRoutes = require('./src/routes/auth');
const blogsRoutes = require('./src/routes/blogs');
app.use(bodyParser.json()); // type JSON

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PATCH, PUT, OPTION');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})


app.use('/v1/auth', authRoutes);
app.use('/v1/blog', blogsRoutes);

app.use((error, req, res, next) => {
    const status = error.errorStatus || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data })
})

mongoose.connect('mongodb+srv://ariyaagustian:sarafgagap@cluster-1.14ed2.gcp.mongodb.net/blog?retryWrites=true&w=majority')
    .then(() => {
        app.listen(4000, () => console.log('Connection Success'));
    })
    .catch(err => console.log(err));


