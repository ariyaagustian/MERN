const { validationResult } = require('express-validator');
const BlogPost = require('../models/blogs');
const path = require('path');
const fs = require('fs');

exports.createPost = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const err = new Error('Input Value Tidak Sesuai');
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
    } else {

        if (!req.file) {
            const err = new Error('Image Harus Di Upload');
            err.errorStatus = 422;
            err.data = errors.array();
            throw err;
        }

        const title = req.body.title;
        const body = req.body.body;
        const image = req.file.path;

        const Posting = new BlogPost({
            title: title,
            body: body,
            image: image,
            author: { uid: 1, name: "Ariya Agustian" }
        });

        Posting.save()
            .then(result => {
                res.status(201).json({
                    message: "Create Blog Post Success",
                    data: result
                });
            })
            .catch(err => {
                console.log('err : ', err);
            });
    }
}

exports.getAllPosts = (req, res, next) => {
    const currentPage = req.query.page || 1;
    const perPage = req.query.perPage || 5;
    let totalItems;

    BlogPost.find().countDocuments()
        .then(count => {
            totalItems = count;
            return BlogPost.find()
                .skip((parseInt(currentPage) - 1) * parseInt(perPage))
                .limit(parseInt(perPage));
        })
        .then(result => {
            res.status(200).json({
                message: 'Data Blog Post Berhasil Dipanggil',
                data: result,
                total_data : totalItems,
                per_page : parseInt(perPage),
                current_page : parseInt(currentPage)
            });
        })
        .catch(err => {
            next(err);
        });
}

exports.deletePost = (req, res, next) => {
    const id = req.params.id;

    BlogPost.findById(id)
        .then(post => {
            if (!post) {
                const error = new Error('Post tidak ditemukan');
                error.errorStatus = 404;
                throw error;
            }
            removeImage(post.image);
            return BlogPost.findByIdAndRemove(id);
        })
        .then(result => {
            res.status(200).json({
                message: 'Hapus post berhasil',
                data: result
            });
        })
        .catch(err => {
            next(err);
        })

}

exports.updatePost = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const err = new Error('Input Value Tidak Sesuai');
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
    } else {

        if (!req.file) {
            const err = new Error('Image Harus Di Upload');
            err.errorStatus = 422;
            err.data = errors.array();
            throw err;
        }

        const title = req.body.title;
        const body = req.body.body;
        const image = req.file.path;

        const id = req.params.id;
        BlogPost.findById(id)
            .then(post => {
                if (!post) {
                    const err = new Error('Post tidak ditemukan');
                    err.errorStatus = 404;
                    throw err;
                }
                post.title = title;
                post.body = body;
                post.image = image;

                return post.save();

            })
            .then(result => {
                res.status(200).json({
                    message: 'Update Sukses',
                    data: result
                })
            })
            .catch(err => {
                next(err);
            });


    }
}

exports.getPostById = (req, res, next) => {
    const id = req.params.id;
    BlogPost.findById(id)
        .then(result => {
            if (!result) {
                const error = new Error('Post tidak ditemukan');
                error.errorStatus = 404;
                throw error;
            } else {
                res.status(200).json({
                    message: 'Post berhasil ditemukan',
                    data: result
                });

            }
        })
        .catch(err => {
            next(err);
        })
}

const removeImage = (filePath) => {
    filePath = path.join(__dirname, '../..', filePath);
    fs.unlink(filePath, err => console.log(err));
}