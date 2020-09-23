const express = require('express');
const {body} = require('express-validator');
const router = express.Router();

const blogsController = require('../controllers/blogs');

// Blog CRUD
router.post('/post', 
        [    
            body('title').isLength({min: 5}).withMessage('Input Title Minimal 5 Karakter'),
            body('body').isLength({min:5}).withMessage('Input Title Minimal 5 Karakter')  
        ],
    blogsController.createPost);
router.get('/posts', blogsController.getAllPosts);
router.get('/post/:id', blogsController.getPostById);
router.delete('/post/:id', blogsController.deletePost);
router.put('/post/:id', blogsController.updatePost);



module.exports = router;