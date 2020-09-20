const express = require('express');
const router = express.Router();

const blogsController = require('../controllers/blogs');

// Blog CRUD
router.post('/post', blogsController.createPost)
router.get('/posts', blogsController.getAllPosts)
router.get('/post/:id', blogsController.getPostById)
router.delete('/post/:id', blogsController.deletePost)
router.put('/post/:id', blogsController.updatePost)



module.exports = router;