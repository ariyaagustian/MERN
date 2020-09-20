exports.register = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const result = {
        message : 'Register Success',
        data : {
            uid : 1,
            name : name,
            email : email
        } 
    }
    res.status(201).json(result);
}

exports.login = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    const result = {
        message : 'Login Success',
        data : {
            email : email,
            password : password,
            token : "jdskbvsdfjnaeir.asdfkjsdnfvksdf.sdfjsbfjhbaefbksjdnfovjsdifubisdfov.asdfvskdjfvjsdoifgnsfvdb"
        } 
    }
    res.status(201).json(result);
}