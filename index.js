const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const productRoutes = require('./src/routes/products');
const authRoutes = require('./src/routes/auth');
const blogsRoutes = require('./src/routes/blogs');
app.use(bodyParser.json()); // type JSON

app.use((req, res, next)=> {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PATCH, PUT, OPTION');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})


app.use('/v1/auth', authRoutes)
app.use('/v1/customer', productRoutes);
app.use('/v1/blog', blogsRoutes);

app.listen(4000);

