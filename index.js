const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const productRoutes = require('./src/routes/products');
app.use(bodyParser.json()); // type JSON


app.use('/v1/customer', productRoutes);

app.listen(4000);

