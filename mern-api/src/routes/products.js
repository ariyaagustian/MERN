const express = require('express');
const router = express.Router();

const productsController = require('../controllers/products');

//Create
router.post('/product', productsController.createProduct)

//Read
router.get('/products', productsController.getAllProducts)



module.exports = router;