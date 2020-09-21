exports.createPost = (req, res, next) => {
    const title = req.body.title;
    const body = req.body.body;
    const image = req.body.image;
    const result = {
        message: "Create Post Success!",
        data: {
            id: 1,
            title: title,
            image: image,
            body: body,
            created_at:"12/06/2020",
            author : {
                uid : 1,
                name : "Ariya"
            }
        }
    }
    res.status(201).json(result);
}

exports.getAllPosts = (req, res, next) => {

    const result = {
        message: "Get All Blog Post Success",
        data: [
            {
                id: 1,
                title: "Anim non aliqua nulla duis ex sit nulla amet ipsum ullamco.",
                body: "Id deserunt eu dolor pariatur pariatur labore enim et officia. Laboris dolore nostrud qui adipisicing esse. Sunt eiusmod eu mollit ullamco eu. Voluptate dolore enim fugiat pariatur et consequat irure consectetur sit officia mollit ut nulla. Fugiat voluptate fugiat eiusmod ipsum Lorem esse laboris nisi anim in."
            },
            {
                id: 2,
                title: "Anim non aliqua nulla duis ex sit nulla amet ipsum ullamco.",
                body: "Id deserunt eu dolor pariatur pariatur labore enim et officia. Laboris dolore nostrud qui adipisicing esse. Sunt eiusmod eu mollit ullamco eu. Voluptate dolore enim fugiat pariatur et consequat irure consectetur sit officia mollit ut nulla. Fugiat voluptate fugiat eiusmod ipsum Lorem esse laboris nisi anim in."
            },
            {
                id: 3,
                title: "Anim non aliqua nulla duis ex sit nulla amet ipsum ullamco.",
                body: "Id deserunt eu dolor pariatur pariatur labore enim et officia. Laboris dolore nostrud qui adipisicing esse. Sunt eiusmod eu mollit ullamco eu. Voluptate dolore enim fugiat pariatur et consequat irure consectetur sit officia mollit ut nulla. Fugiat voluptate fugiat eiusmod ipsum Lorem esse laboris nisi anim in."
            },
            {
                id: 4,
                title: "Anim non aliqua nulla duis ex sit nulla amet ipsum ullamco.",
                body: "Id deserunt eu dolor pariatur pariatur labore enim et officia. Laboris dolore nostrud qui adipisicing esse. Sunt eiusmod eu mollit ullamco eu. Voluptate dolore enim fugiat pariatur et consequat irure consectetur sit officia mollit ut nulla. Fugiat voluptate fugiat eiusmod ipsum Lorem esse laboris nisi anim in."
            },
            {
                id: 5,
                title: "Anim non aliqua nulla duis ex sit nulla amet ipsum ullamco.",
                body: "Id deserunt eu dolor pariatur pariatur labore enim et officia. Laboris dolore nostrud qui adipisicing esse. Sunt eiusmod eu mollit ullamco eu. Voluptate dolore enim fugiat pariatur et consequat irure consectetur sit officia mollit ut nulla. Fugiat voluptate fugiat eiusmod ipsum Lorem esse laboris nisi anim in."
            },
        ]
    }

    res.status(200).json(result);
}

exports.deletePost = (req, res, next) => {
    const title = req.body.title;
    const body = req.body.body;
    const id = req.params.id;
    
    const result = {
        message: "Delete Post Success!",
        data: {
            id: id,
            title: "Eiusmod consectetur consectetur sunt amet sunt eiusmod laboris qui anim excepteur.",
            body: "Eu et est cupidatat anim velit consequat fugiat cillum aliquip elit ad quis aute sint. Reprehenderit cillum occaecat excepteur nostrud laborum consectetur incididunt magna velit. Quis culpa voluptate ex incididunt."
        }
    }
    res.status(201).json(result);
}

exports.updatePost = (req, res, next) => {
    const title = req.body.title;
    const body = req.body.body;
    const id = req.params.id;
    const result = {
        message: "Update Post Success!",
        data: {
            id: id,
            title: title,
            body: body
        }
    }
    res.status(201).json(result);
}

exports.getPostById = (req, res, next) => {
    const title = req.body.title;
    const body = req.body.body;
    const id = req.params.id;
    const result = {
        message: "Get Post by Id Success!",
        data: {
            id: id,
            title: "Title 1",
            body: "Body 1"
        }
    }
    res.status(201).json(result);
}